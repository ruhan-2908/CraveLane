import express from 'express'
import authMiddlware from '../middleware/auth.js'
import {placeOrder} from '../controllers/orderController.js'
import {verifyOrder} from '../controllers/orderController.js'


const orderRouter = express.Router();

orderRouter.post('/place',authMiddlware,placeOrder);
orderRouter.get('/verify',authMiddlware,verifyOrder);   
export default orderRouter;