import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({cart, setCart}) => {
  return (

    <>
    <header className='sticky-top'>
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
    <Link to={'/'} className="navbar-brand fs-2 fw-bold text-white px-5">E-commerce</Link>
      <form className="d-flex justify-content-between alignItem-center w-25">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <Link to={'/cart'}>
      <button className="btn px-3 position-relative" >
          <FaCartPlus style={{fontSize: '30px', color: '#fff', fontWeight: '600'}}/>
          <span class="position-absolute top-0  start-1 translate-middle badge bg-danger rounded-pill">
            {cart.length}
          </span>
      </button>
      </Link>
  </div>
</nav>
</header>
</>
  )
}

export default Navbar