import { Trash, PlusIcon } from 'lucide-react'

export default function ProductField({
    index,
    product,
    products,
    quantities,
    setQuantities,
    register,
    setValue,
    errors,
    remove,
}) {
    const handleQuantityChange = (index, delta) => {
        const newQuantities = [...quantities]
        newQuantities[index] = Math.max(1, (newQuantities[index] || 1) + delta)
        setQuantities(newQuantities)
        setValue(`products.${index}.quantity`, newQuantities[index])
    }

    return (
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <select
                {...register(`products.${index}.product_id`, {
                    required: 'Seleccione un producto',
                })}
                onChange={(e) => {
                    const selectedProduct = products.find(
                        (p) => p.id === parseInt(e.target.value)
                    )
                    setValue(`products.${index}.product_name`, selectedProduct?.product_name || '')
                    setValue(`products.${index}.product_price`, selectedProduct?.product_price || 0)
                }}
                className="w-2/3 p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            >
                <option value="">Seleccione un producto</option>
                {products.map((product) => (
                    <option key={product.id} value={product.id}>
                        {product.product_name} - ${product.product_price}
                    </option>
                ))}
            </select>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => handleQuantityChange(index, -1)}
                    type="button"
                    className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    &#8722;
                </button>
                <input
                    {...register(`products.${index}.quantity`, {
                        required: 'La cantidad es requerida',
                        min: { value: 1, message: 'La cantidad debe ser al menos 1' },
                    })}
                    value={quantities[index] || 1}
                    type="number"
                    className="w-12 text-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    readOnly
                />
                <button
                    onClick={() => handleQuantityChange(index, 1)}
                    type="button"
                    className="px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    &#43;
                </button>
            </div>

            <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600 hover:text-red-800 focus:outline-none"
            >
                <Trash className="w-5 h-5" />
            </button>
            {errors.products?.[index]?.product_id && (
                <p className="text-red-500 text-sm">{errors.products[index].product_id.message}</p>
            )}
        </div>
    )
}
