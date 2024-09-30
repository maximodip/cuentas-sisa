'use client'

import { useForm, useFieldArray } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import ProductField from '@/components/ProductField'
import { useOrderContext } from '@/context/OrderContext' // Importa el contexto

export default function NewOrder() {
  const router = useRouter()

  // Extraer los valores del contexto
  const {
    products,
    loading,
    createOrder,
    addProduct,
    removeProduct,
    updateQuantity,
    quantities,
  } = useOrderContext()

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
      products: [{ product_id: '', product_name: '', product_price: 0, quantity: 1 }],
    },
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'products',
  })



  const onSubmit = async (data) => {
    try {
      await createOrder(data) // Usa la función createOrder del contexto
      router.push('/')
      reset()
      toast.success('Cuenta creada')
    } catch (error) {
      toast.error(error?.response?.data?.error || 'Error al crear la cuenta')
    }
  }

  return (
    <div className="flex items-center justify-center mt-12">
      <article className="flex flex-col items-center w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Crear Nueva Cuenta</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          <div className="flex flex-col">
            <label htmlFor="ClientName" className="block text-sm font-medium text-gray-700">
              Nombre del Cliente
            </label>
            <input
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              name="ClientName"
              {...register('customer_name', {
                required: 'Ingrese un nombre',
              })}
            />
            {errors.customer_name && (
              <p className="text-red-500 text-sm mt-1">{errors.customer_name.message}</p>
            )}
          </div>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <ProductField
                key={field.id}
                index={index}
                product={field}
                products={products}
                quantities={quantities}
                setQuantities={updateQuantity}  // Llama al updateQuantity del contexto
                register={register}
                setValue={setValue}
                errors={errors}
                remove={() => removeProduct(index)}  // Usa removeProduct del contexto
              />
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => append({ product_id: '', product_name: '', product_price: 0, quantity: 1 })}
              className="flex items-center px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
            >
              Agregar Producto <PlusIcon className="ml-2" />
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
      </article>
    </div>
  )
}
