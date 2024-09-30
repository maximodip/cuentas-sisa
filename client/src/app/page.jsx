'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { SearchInput } from '../components/ui/SearchInput'
import { ConfirmDialog } from '../components/ui/ConfirmDialog'
import Link from 'next/link'
import moment from 'moment'
import toast from 'react-hot-toast'

export default function Home() {
  const [orders, setOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:8000/orders') // Adjust the URL to match your backend endpoint
      setOrders(response.data)
      setFilteredData(response.data)
      setLoading(false)
    } catch (error) {
      setError('Failed to fetch orders')
    }
  }

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase()
    setSearchTerm(value)

    if (value === '') {
      setFilteredData(orders)
    } else {
      const filtered = orders.filter((order) =>
        order.customer_name.toLowerCase().includes(value)
      )
      setFilteredData(filtered)
    }
  }

  const handleDelete = async (orderId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/orders/${orderId}`
      )
      if (response.status === 200) {
        // Remove the deleted order from the state
        const updatedOrders = orders.filter((order) => order.id !== orderId)
        setOrders(updatedOrders)
        setFilteredData(updatedOrders)
        toast.success(response.data.message) // Show success message
      } else {
        throw new Error('Failed to delete order')
      }
    } catch (error) {
      console.error('Failed to delete order', error)
      toast.error('Failed to delete order')
    }
  }

  return (
    <section className='p-4 mx-auto'>
      <div className='w-full mb-8'>
        <SearchInput value={searchTerm} onChange={handleSearch} />
      </div>
      <div className='grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3 xl:grid-cols-4'>
        {loading && <p>Cargando...</p>}

        {filteredData.map((order, index) => (
          <div key={index} className='text-balance flex flex-col overflow-hidden'>
            <h2 className='text-xl font-semibold'>{order.customer_name}</h2>
            <p>
              Estado:
              <span
                className={`${order.status === 'pagado'
                  ? 'text-green-500 font-semibold opacity-50'
                  : 'text-yellow-500'
                  }`}
              >
                {' '}
                {order.status}
              </span>
            </p>
            <p className='text-green-600'>Total: {order.total}</p>
            <p className='opacity-70'>
              {moment(order.created_date).format('DD/MM/YYYY')}
            </p>
            <div className='flex items-center gap-x-2'>
              <Link
                href={`/orders/${order.id}`}
                className='inline-block mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Detalles
              </Link>
              <button
                onClick={() => handleDelete(order.id)}
                className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full uppercase text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 inline-block'
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <ConfirmDialog
        title='Eliminar cuenta'
        message='Estas seguro de eliminar esta cuenta? No podrás recuperarla luego'
      />
    </section>
  )
}
