import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // Adjust the import path as per your directory structure
import Cart from './pages/Cart/Cart'; // Example import for Cart component
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'; // Example import for PlaceOrder component
import Navbar from './components/Navbar/Navbar'; // Example import for Navbar component
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders'; // Importing MyOrders component
const App = () => {
  const[showLogin,setShowLogin]=useState(false);
  return (
    <> 
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className="app">
    <Navbar  setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
      <Route path='/verify' element={<Verify />} />
      <Route path='/myorders' element={<MyOrders />} />
    </Routes>
  </div>
  <Footer/></>
   
  );
}

export default App;
