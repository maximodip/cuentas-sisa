import express from 'express'
import cors from 'cors'
import { connectDB } from './db.js'
import { pool } from './db.js'
import ordersRoutes from './routes/orders.routes.js'
import productRoutes from './routes/products.routes.js'

import multer from 'multer'
import csv from 'csv-parser'
import fs from 'fs'
const upload = multer({ dest: 'uploads/' })

const app = express()
const PORT = 8000

connectDB()

app.use(cors())
app.use(express.json())
app.listen(PORT)
app.use(ordersRoutes)
app.use(productRoutes)

app.post('/upload-products', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' })
  }

  const filePath = req.file.path
  const products = []

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      products.push(row)
    })
    .on('end', async () => {
      try {
        for (const product of products) {
          await connection.query(
            'INSERT INTO product (product_name, product_price) VALUES (?, ?)',
            [product.product_name, product.product_price]
          )
        }

        await connection.commit()
        connection.release()

        fs.unlinkSync(filePath) // Elimina el archivo después de procesarlo

        res.status(201).json({ message: 'Productos importados correctamente' })
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    })
})

console.log(`Server is running on port ${PORT}`)
