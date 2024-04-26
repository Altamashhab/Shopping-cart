import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart, setCart}) => {
    
 const removeItem = (id) => {
   const updateCart = cart.filter(items => items.id !== id)
   setCart(updateCart)
 }

  return (

       <>

          <div className='container d-block my-5' style={{width: '54%'}}>
           {cart.length === 0 ? (
             
            <>
            
            <div className='text-center'>
                <h1>Your Cart is Empty</h1>
                <Link to={'/'} className='btn btn-warning px-5'>Shop Now</Link>
            </div>
            </>
           ): 
           cart.map((product) =>{
            return(
            <>
            <div className="card my-5 " style={{width: '700px'}}>
            <div className='row g-0'>
            <div className='col-md-4'>
            <img src={product.imgSrc} className="card-img-top img-fluid rounded-start" style={{width: '100%'}} alt="..." />
            </div>
            <div className='col-md-8'>
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className='fs-3'>₹{product.price}</p>
            <button className='btn btn-danger m-3'>Buy Now</button>
            <button className='btn btn-warning m-3' onClick={() => removeItem(product.id)}>Remove</button>
  </div>
  </div>
  </div>
  </div>       
                
    </>
            )
          })}
  </div>

  {cart.length !== 0 && (
     <div className='container text-center'>
        <button className='btn btn-primary px-5'>Checkout</button>
        <button className='btn btn-danger m-3 px-5' onClick={() => setCart([])}>Clear</button>
     </div>
  )}



  </>
  )
} 

export default Cart