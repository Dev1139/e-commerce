
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

// Global Variables
const currency = 'inr'
const deliveryCharge = 10


// Gateway Initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)



// Placing order with COD method 
const placeOrder = async (req,res) => {
    try {
        const {userId, items, amount, address,paymentMethod} = req.body;  // here we get userId because of auth middleware
        const orderData = {
          userId,
          items,
          address,
          amount,
          paymentMethod,
          payment: paymentMethod === "COD" ? false : true,
          date: Date.now(),
        };

        const newOrder = new orderModel(orderData)
        await newOrder.save();

        // after saving we have to empty cartData

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success:true, message:"Order Placed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }    
}

// Placing order with Stripe method 
const placeOrderStripe = async (req,res) => {
    try {
      const { userId, items, amount, address, paymentMethod } = req.body; // here we get userId because of auth middleware
      const {origin} = req.headers // like frontend url
      const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod,
        payment: paymentMethod === "COD" ? false : true,
        date: Date.now(),
      };

      const newOrder = new orderModel(orderData)
      await newOrder.save()

      const line_items = items.map((item)=>({
         price_data:{
            currency:currency,
            product_data:{
               name:item.name
            },
            unit_amount :item.price*100
         },
         quantity:item.quantity   
      }))

      line_items.push({
        price_data: {
          currency: currency,
          product_data: {
            name: "Delivery Charges",
          },
          unit_amount: deliveryCharge * 100,
        },
        quantity: 1,
      });

      const session = await stripe.checkout.sessions.create({
        success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
        line_items,
        mode:'payment',
      });

      res.json({success:true, session_url:session.url})
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
}

// Verify stripe payment
const verifyStripe = async (req,res) => {
   const {orderId, success} = req.body;
   const userId = req.userId;
   try{
      if(success==='true'){
         await orderModel.findByIdAndUpdate(orderId, {payment:true})
         await userModel.findByIdAndUpdate(userId, {cartData:{}})
         res.json({success:true, message:"Payment Verified"})
      }else{
         await orderModel.findByIdAndDelete(orderId)
         res.json({success:false,message:"Payment Failed"})
      }
   }
   catch(error){
      console.log(error);
      res.json({ success: false, message: error.message });
   }
}



// Placing order with Razorpay method 
const placeOrderRazorpay = async (req,res) => {
    try {
      res.json({success:true,message:"Currently This method is not available so please use Stripe or Cash on Delivery"})
    } catch (error) {
      console.log(error);
      res.json({success:false, message:error.message})
    }
}

// All Orders Data for admin panel
const allOrders = async (req,res)=>{
     try {
         
        const orders = await orderModel.find({})
        res.json({success:true, orders})
     } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
     }
}

// user order data for frontend
const userOrders = async (req,res)=>{
     try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true, orders});

     } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
     }
}

// update order status
const updateStatus = async (req,res)=>{
     try {
         const {orderId, status} = req.body
         await orderModel.findByIdAndUpdate(orderId, {status})
         res.json({success:true, message:"Status Updated"})
     } catch (error) {
         console.log(error);
         res.json({success:false, message:error.message})
         
     }
}

export {verifyStripe,updateStatus, userOrders, allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe}