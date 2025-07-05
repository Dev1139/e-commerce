import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../src/pages/Home"
import Collection from "../src/pages/Collection";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Product from "../src/pages/Product";
import Cart from "../src/pages/Cart";
import Login from "../src/pages/Login";
import Orders from "../src/pages/Orders";
import PlaceOrder from "../src/pages/PlaceOrder";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from "react-toastify";
import Verify from './pages/Verify';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App