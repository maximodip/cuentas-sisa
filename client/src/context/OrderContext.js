'use client'
// src/context/OrderContext.js

import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [quantities, setQuantities] = useState([])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:8000/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products', error)
      toast.error('Error al cargar productos')
    } finally {
      setLoading(false)
    }
  }

  const createOrder = async (data) => {
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:8000/orders', data)
      return response.data // Devuelve la respuesta en caso de éxito
    } catch (error) {
      throw error // Lanza el error para que pueda ser manejado en el componente
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = (index, newQuantity) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities]
      updatedQuantities[index] = Math.max(1, newQuantity) // No permitir valores menores a 1
      return updatedQuantities
    })
  }

  const addProduct = () => {
    setQuantities((prev) => [...prev, 1]) // Agrega una nueva cantidad por defecto
  }

  const removeProduct = (index) => {
    setQuantities((prev) => prev.filter((_, i) => i !== index)) // Remueve la cantidad por el índice
  }

  useEffect(() => {
    fetchProducts() // Llama a fetchProducts al montar el componente
  }, [])

  return (
    <OrderContext.Provider
      value={{
        products,
        loading,
        quantities,
        createOrder,
        addProduct,
        removeProduct,
        updateQuantity,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => {
  return useContext(OrderContext)
}
