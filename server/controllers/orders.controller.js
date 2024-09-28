import { pool } from '../db.js'

export const getAllOrders = async (req, res) => {
  try {
    const [rows] = await pool.query(`
            SELECT 
              co.id,
              co.customer_name,
              co.status,
              co.total,
              co.created_date,
              p.product_name,
              p.product_price,
              op.quantity
            FROM customers_orders co
            JOIN order_products op ON co.id = op.order_id
            JOIN product p ON op.product_id = p.id
          `)

    const orders = {}

    rows.forEach((row) => {
      if (!orders[row.id]) {
        orders[row.id] = {
          id: row.id,
          customer_name: row.customer_name,
          status: row.status,
          total: row.total,
          createdAt: row.created_date,
          products: [],
        }
      }
      orders[row.id].products.push({
        product_name: row.product_name,
        product_price: row.product_price,
        quantity: row.quantity,
      })
    })

    res.json(Object.values(orders))
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(500).json({ error: 'Failed to fetch orders' })
  }
}

export const getOrder = async (req, res) => {
  const orderId = req.params.id

  try {
    // Query to get order details along with products
    const [rows] = await pool.query(
      `
          SELECT 
            co.customer_name,
            p.product_name,
            p.product_price,
            op.quantity,
            co.status,
            co.created_date
          FROM customers_orders co
          JOIN order_products op ON co.id = op.order_id
          JOIN product p ON op.product_id = p.id
          WHERE co.id = ?
        `,
      [orderId]
    )

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' })
    }

    // Calculate total
    const total = rows.reduce(
      (sum, row) => sum + row.product_price * row.quantity,
      0
    )

    // Transforming data into the desired structure
    const orderDetails = {
      customer_name: rows[0].customer_name,
      products: rows.map((row) => ({
        product_name: row.product_name,
        product_price: row.product_price,
        quantity: row.quantity,
      })),
      status: [rows[0].status], // Assuming status can be either 'payed' or 'pending'
      total: total.toFixed(2), // Ensure total is formatted as a decimal
      createdAt: rows[0].created_date,
    }

    res.json(orderDetails)
  } catch (error) {
    console.error('Error fetching order details:', error)
    res.status(500).json({ error: 'Failed to fetch order details' })
  }
}

export const createOrder = async (req, res) => {
  const { customer_name, products } = req.body // products is an array of { product_id, quantity }

  if (!customer_name || !products || !products.length) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const [existingOrder] = await pool.query(
    'SELECT id FROM customers_orders WHERE customer_name = ?',
    [customer_name]
  )

  if (existingOrder.length > 0) {
    // If order already exists, return an error response
    return res
      .status(400)
      .json({ error: 'Una cuenta con el mismo nombre ya existe' })
  }

  try {
    const [orderResult] = await pool.query(
      'INSERT INTO customers_orders (customer_name, total, created_date) VALUES (?, 0, NOW())',
      [customer_name]
    )

    const orderId = orderResult.insertId
    let total = 0

    for (const product of products) {
      const [productResult] = await pool.query(
        'SELECT product_price FROM product WHERE id = ?',
        [product.product_id]
      )

      if (!productResult.length) {
        throw new Error(`Product with ID ${product.product_id} not found`)
      }

      const productPrice = productResult[0].product_price
      const productTotal = productPrice * product.quantity
      total += productTotal

      await pool.query(
        'INSERT INTO order_products (order_id, product_id, quantity) VALUES (?, ?, ?)',
        [orderId, product.product_id, product.quantity]
      )
    }

    await pool.query('UPDATE customers_orders SET total = ? WHERE id = ?', [
      total,
      orderId,
    ])

    res.status(201).json({ message: 'Order created successfully', orderId })
  } catch (error) {
    console.error('Error creating order:', error)
    res.status(500).json({ error: 'Failed to create order' })
  }
}

export const deleteOrder = async (req, res) => {
  const { id } = req.params

  try {
    await pool.query('DELETE FROM customers_orders WHERE id=?', [id])

    res.status(200).json({ message: 'Cuenta eliminada correctamente' })
  } catch (error) {
    console.error('Error deleting order:', error)
    res.status(500).json({ error: 'Failed to delete order' })
  }
}

export const changeStatus = async (req, res) => {
  const { id } = req.params

  try {
    // Get the current status of the order
    const [order] = await pool.query(
      'SELECT status FROM customers_orders WHERE id = ?',
      [id]
    )

    if (order.length === 0) {
      return res.status(404).json({ message: 'Cuenta no encontrada' })
    }

    const currentStatus = order[0].status
    const newStatus = currentStatus === 'pendiente' ? 'pagado' : 'pendiente'

    // Update the order status to the new status
    const [result] = await pool.query(
      'UPDATE customers_orders SET status = ? WHERE id = ?',
      [newStatus, id]
    )

    res
      .status(200)
      .json({ message: `Estado de la cuenta cambiado a ${newStatus}` })
  } catch (error) {
    console.error('Error updating order status:', error)
    res
      .status(500)
      .json({ error: 'Error al actualizar el estado de la cuenta' })
  }
}
