import React from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

import {useSelector} from "react-redux"

export default function Menuheader() {


  const count=useSelector(state=>state.cartcounter.count)

  const username=useSelector(state=>state.pricecounter.user)
  
  const navigate=useNavigate()

  const logout=()=>{
    localStorage.removeItem("loginUser")
    navigate("/login")
   
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className="container">
        <div className="d-flex align-items-center">
            <a href='#' className='navbar-brand'>
                <img src='https://imge.cloud/images/2022/06/07/rKL2MC.png' className='logo-image'/>
            </a>
            <h3 className="m-3">Welcome {username}</h3>
        </div>
     
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='navbar-nav ms-auto'>
             
                    <Link to="/menu" className='btn text-secondary' >Menu</Link>
                    <Link to="/cart"  className='btn text-secondary' >Cart {count>0?<span className="badge bg-secondary">{count}</span>:""}</Link>
                    <Link to="/"  className='btn text-secondary' >Profile</Link>
                    <button className='btn btn-outline-secondary' onClick={()=>logout()}>Logout</button>   

            </div>
        </div>
      </div>
       
    </nav>
  )
}
