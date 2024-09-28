export const ConfirmDialog = ({
  show,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50'>
      <div className='p-6 text-center bg-white rounded-lg shadow-lg'>
        <h3 className='mb-4 text-lg font-semibold'>{title}</h3>
        <p className='mb-6'>{message}</p>
        <div className='space-x-4'>
          <button
            className='px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className='px-4 py-2 text-black bg-gray-300 rounded hover:bg-gray-400'
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
