import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {items} from './components/Data'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

const App = () => {

  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);

 

  return (
    <>
    <Router>
    <Navbar cart={cart} setData={data}/>
    <Routes>
         <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>} />
         <Route path='/product/:id' element={<ProductDetails/>} />
         <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App