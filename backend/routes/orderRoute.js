import express from 'express'
import authMiddlware from '../middleware/auth.js'
import {placeOrder, userOrders} from '../controllers/orderController.js'
import {verifyOrder} from '../controllers/orderController.js'


const orderRouter = express.Router();

orderRouter.post('/place',authMiddlware,placeOrder);
orderRouter.get('/verify',verifyOrder); 
orderRouter.post('/userorders',authMiddlware,userOrders)  
export default orderRouter;