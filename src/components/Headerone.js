import React from 'react'
import {Link} from "react-router-dom"

export default function Headerone() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
        <a href='#' className='navbar-brand'>
            <img src='https://imge.cloud/images/2022/06/07/rKL2MC.png' className='logo-image'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item me-1'>
                    <Link to="/signup" className='btn btn-outline-secondary'>Signup</Link>
                </li>
                <li className='nav-item ms-1'>
                    <Link to="/login" className='btn btn-outline-secondary'>Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
