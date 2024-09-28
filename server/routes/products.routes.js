import Router from 'express'
import multer from 'multer'
import {
  getAllProducts,
  uploadProducts,
} from '../controllers/product.controller.js'

const router = Router()

router.get('/products', getAllProducts)
router.post('/upload-products', uploadProducts)

export default router
