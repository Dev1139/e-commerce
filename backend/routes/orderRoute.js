import express from "express"
import {updateStatus, userOrders, allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe,verifyStripe} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from "../middleware/auth.js";

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razor", authUser, placeOrderRazorpay);
orderRouter.post("/verifyStripe", authUser, verifyStripe);


// User Features
orderRouter.post("/userorders",authUser,userOrders)

export default orderRouter


