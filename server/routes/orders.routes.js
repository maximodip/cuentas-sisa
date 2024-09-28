import Router from 'express'
import {
  createOrder,
  getAllOrders,
  deleteOrder,
  getOrder,
  changeStatus,
} from '../controllers/orders.controller.js'

const router = Router()

router.get('/orders', getAllOrders)
router.get('/orders/:id', getOrder)

router.post('/orders', createOrder)
router.put('/orders/:id/status', changeStatus)

router.delete('/orders/:id', deleteOrder)

export default router
