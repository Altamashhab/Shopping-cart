import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const ProductDetails = () => {

    const {id} = useParams();
    
    const [product, setProduct] = useState({})
    const [relatedProducts, setRelatedProducts]= useState([])
    
    useEffect(()=>{

        const filterProduct = items.filter((product)=> product.id == id)
        setProduct(filterProduct[0])
        
        const relatedProducts = items.filter((habib) => habib.category === product.category)
        setRelatedProducts(relatedProducts)

    }, [id, product.category])
    

  return (
    <>
    <div className='container'>
     <div className='img'>
        <img src={product.imgSrc} alt="" />
     </div>
     <div className='text-center'>
       <h1 className="card-title">{product.title}</h1>
       <p className="card-text">{product.description}</p>
       <p className='fs-3'>₹{product.price}</p>
       <button className='btn btn-primary px-4'>Add To Cart</button>
       <button className='btn btn-danger px-4 mx-4'>Buy Now</button>
     </div>
    </div>
    <Product items={relatedProducts}/>
    </>
  )
}

export default ProductDetails