import { pool } from '../db.js'
import fs from 'fs'
import csv from 'csv-parser'

export const getAllProducts = async (req, res) => {
  try {
    const [products] = await pool.query('SELECT * FROM product')
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const uploadProducts = async (req, res) => {
  const filePath = req.file.path

  const products = []

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      products.push(row)
    })
    .on('end', async () => {
      try {
        const pool = await pool.getConnection()
        await pool.beginTransaction()

        for (const product of products) {
          const [result] = await pool.query(
            'INSERT INTO product (product_name) VALUES (?)',
            [product.product_name]
          )
          const productId = result.insertId
          await pool.query(
            'INSERT INTO product_price (product_id, price, start_date) VALUES (?, ?, ?)',
            [productId, product.product_price, new Date()]
          )
        }

        await pool.commit()
        pool.release()

        fs.unlinkSync(filePath) // Remove the file after processing

        res.status(201).json({ message: 'Productos importados correctamente' })
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    })
}
