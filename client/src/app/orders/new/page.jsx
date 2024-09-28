'use client'

import { useForm, useFieldArray } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { Trash, PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function NewOrder() {
  const [products, setProducts] = useState([])
  const [quantities, setQuantities] = useState([])

  const router = useRouter()

  const {
    control,
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer_name: '',
      products: [
        { product_id: '', product_name: '', product_price: 0, quantity: 1 },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/products')
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products', error)
      }
    }

    fetchProducts()
  }, [])

  const handleQuantityChange = (index, delta) => {
    const newQuantities = [...quantities]
    newQuantities[index] = Math.max(1, (newQuantities[index] || 1) + delta)
    setQuantities(newQuantities)
    setValue(`products.${index}.quantity`, newQuantities[index])
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/orders', data)
      console.log(response.data)
      router.push('/')
      reset() // Reset the form after successful submission
      toast.success('CUENTA CREADA')
    } catch (error) {
      toast.error(error.response?.data?.error)
    }
  }

  return (
    <div className='flex items-center justify-center mt-12'>
      <article className='flex flex-col items-center w-full'>
        <h1 className='text-2xl font-semibold'>Crear Nueva Cuenta</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
          <div className='flex flex-col'>
            <label
              htmlFor='ClientName'
              className='block text-xs font-medium text-gray-700'
            >
              Nombre del cliente
            </label>
            <input
              className='w-full p-4 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm'
              name='ClientName'
              {...register('customer_name', {
                required: 'El nombre del cliente es requerido',
              })}
              placeholder='Nombre...'
            />
            {errors.customer_name && <p>{errors.customer_name.message}</p>}
          </div>
          <div className='flex flex-col mt-2 gap-y-2'>
            <div className='border opacity-75'></div>
            {fields.map((field, index) => (
              <div key={field.id} className='flex items-center gap-2'>
                <div>
                  <select
                    {...register(`products.${index}.product_id`, {
                      required: 'Product is required',
                    })}
                    defaultValue={field.product_id}
                    onChange={(e) => {
                      const selectedProduct = products.find(
                        (p) => p.id === parseInt(e.target.value)
                      )
                      setValue(
                        `products.${index}.product_name`,
                        selectedProduct.product_name
                      )
                      setValue(
                        `products.${index}.product_price`,
                        selectedProduct.product_price
                      )
                    }}
                    className='mt-1.5 w-full rounded-lg border-gray-300 border text-gray-700 sm:text-sm p-2'
                  >
                    <option>Seleccione un producto</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.product_name} - ${product.product_price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='flex items-center gap-1'>
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    type='button'
                    className='leading-10 text-gray-600 transition size-10 hover:opacity-75'
                  >
                    &#8722;
                  </button>

                  <input
                    {...register(`products.${index}.quantity`, {
                      required: 'Quantity is required',
                    })}
                    defaultValue={field.quantity}
                    type='number'
                    value={quantities[index] || 1}
                    aria-readonly='true'
                    id='Quantity'
                    className='h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                  />

                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    type='button'
                    className='leading-10 text-gray-600 transition size-10 hover:opacity-75'
                  >
                    &#43;
                  </button>
                </div>
                {errors.products?.[index]?.quantity && (
                  <p>{errors.products[index].quantity.message}</p>
                )}
                <div className='flex items-center gap-2 text-white'>
                  <button
                    className='flex items-center p-2 mx-auto rounded bg-sky-600'
                    type='button'
                    onClick={() => append({ product_id: '', quantity: '' })}
                  >
                    Agregar otro producto
                    <PlusIcon />
                  </button>
                  <button
                    type='button'
                    onClick={() => remove(index)}
                    className='flex items-center p-2 mx-auto bg-red-600 rounded'
                  >
                    Eliminar producto
                    <Trash />
                  </button>
                </div>
                {errors.products?.[index]?.product_id && (
                  <p>{errors.products[index].product_id.message}</p>
                )}
              </div>
            ))}
          </div>
          <button type='submit' className='p-2 rounded'>
            Crear cuenta
          </button>
        </form>
      </article>
    </div>
  )
}
