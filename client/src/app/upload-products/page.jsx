'use client'
import { useState } from 'react'
import axios from 'axios'

function UploadProducts() {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!file) {
      alert('Please select a file.')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post(
        'http://localhost:8000/upload-products',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(response.data)
      alert('Productos importados correctamente')
    } catch (error) {
      console.error('Error importing products:', error)
      alert('Error importing products')
    }
  }

  return (
    <div>
      <h1>Upload Products</h1>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange} accept='.csv' />
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default UploadProducts
