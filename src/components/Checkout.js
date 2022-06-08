import React from 'react'
import Menuheader from './Menuheader'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

export default function () {

    const price=useSelector(state=>state.pricecounter.price)

    const navigate=useNavigate()
    const validateform=(event)=>{
        event.preventDefault()
        navigate("/success")
    }
  return (
    <>
        <Menuheader/>
        <div>
            <h3>Checkout</h3>
            <form onSubmit={validateform}>
                <div className="form-group">
                    <label>Credit Card</label>
                    <input type="text" className="form-control" placeholder="16 digit credit card number"/>
                </div>
                <p className="">Order Total: <span className='fw-bold checkout-total'>${price}</span></p>
                <input type="submit" value="Checkout" className='btn btn-dark'/>
            </form>
        </div>
    </>
  )
}
