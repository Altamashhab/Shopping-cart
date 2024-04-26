import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({items, cart, setCart}) => {


  const addToCart = (id, imgSrc, title, description, price) =>{

   const obj = {

      id, imgSrc, title, description, price

   }

   setCart([...cart, obj])
   console.log("The Cart element Added", cart);

  }



  return (
    
    <div className='container my-5 text-center'>
    <div className='row'>
     {
        items.map((product)=>{
         return (
         <>
          <div key={product.id} className='col-lg-4 col-sm-4 cold-md-6 my-4'>
          <div className="card" style={{width: '100%'}}>
          <Link to={`/product/${product.id}`} style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={product.imgSrc} className="card-img-top img-fluid" alt="..." />
          </Link>
          <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className='fs-3'>₹{product.price}</p>
          <button className="btn btn-primary" 
           onClick={() => addToCart(
            product.id, 
            product.imgSrc, 
            product.title, 
            product.description, 
            product.price)}>Add To Cart</button>
            <button className='btn btn-danger m-3'>Buy Now</button>
  </div>
</div>

</div>
          
          
</>



         )



        })
     }


    </div>
    </div>

  )
}

export default Product