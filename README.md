# 🛒 MERN Stack E-Commerce Platform

A full-featured E-Commerce platform built using the MERN stack with separate user and admin panels. Users can browse products, manage their cart, and place orders, while admins can control the store via a secure dashboard.

---

## 🎯 Key Features

- 🛍️ Product listing with search and filtering  
- 🛒 Add to cart, update quantity, and remove items  
- 🔐 JWT-based user authentication with protected routes  
- 🧾 Place orders with online payment support  
- 📦 Admin dashboard to manage products, users, and orders  
- 📤 Image uploads via Cloudinary  
- 💳 Stripe & Razorpay payment integration  
- 📱 Fully responsive UI for mobile and desktop  
- 🔔 Real-time toast notifications

---

## ⚡ Project Structure

- **Frontend**: User-facing e-commerce interface (`/frontend`)
- **Admin**: Admin dashboard for managing products and users (`/admin`)
- **Backend**: Node.js + Express.js API (`/backend`)

---

## 🛠️ Tech Stack

### 👨‍💻 Frontend (User + Admin)
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

### 🔙 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- Bcrypt (Password hashing)
- Multer + Cloudinary (Image upload)
- Stripe & Razorpay (Payment processing)
- dotenv (Environment variables)

---

## 🧭 App Flow

### 👤 User Panel
1. Register / Login
2. Browse products
3. Add products to cart
4. Checkout with online payment (Stripe/Razorpay)
5. View order history

### 🛠️ Admin Panel
1. Secure login
2. Add/edit/delete products
3. Manage all users
4. Manage and update customer orders
5. Upload product images

---

