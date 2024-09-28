'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import moment from 'moment'
import toast from 'react-hot-toast'

export default function Page() {
  const [order, setOrder] = useState(null)
  const [error, setError] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetchOrder()
  }, [id])

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/orders/${id}`)
      setOrder(response.data)
    } catch (error) {
      setError('Failed to fetch order')
    }
  }

  const handleUpdateStatus = async (orderId) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/orders/${orderId}/status`
      )
      if (response.status === 200) {
        toast.success(response.data.message)
        setTimeout(() => window.location.reload(), 1000)
      } else {
        throw new Error('Failed to update order status')
      }
    } catch (error) {
      toast.error(error.response?.data?.error)
    }
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!order) {
    return <div>Actualizando...</div>
  }

  return (
    <div className='flex items-center justify-center mt-12'>
      <article className='flex flex-col items-center w-full'>
        <div>
          <h2 className='text-2xl font-semibold'>{order.customer_name}</h2>
          <ul>
            {order.products.map((product, index) => (
              <li key={index} className='flex gap-2'>
                <p>{product.product_name}</p>
                <p>${product.product_price}</p>
                <span>x{product.quantity}</span>
              </li>
            ))}
          </ul>
          <p className='text-green-600'>Total: {order.total}</p>
          <p>
            Estado:
            <span
              className={`${
                order.status[0] === 'pagado'
                  ? 'text-green-500 font-semibold opacity-50'
                  : 'text-yellow-500'
              }`}
            >
              {' '}
              {order.status}
            </span>
          </p>
          <p className='opacity-70'>
            Fecha de creación: {moment(order.created_date).format('DD/MM/YYYY')}
          </p>
          <div className='flex items-center justify-center gap-4'>
            <Link
              href={`/orders/${order.id}`}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block'
            >
              Editar
            </Link>

            <button
              onClick={() => handleUpdateStatus(id)}
              className='uppercase inline-block mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
            >
              {order.status[0] === 'pendiente'
                ? 'Marcar como pagada'
                : 'Marcar como pendiente'}
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}
