import React from 'react'
import Menuheader from './Menuheader'

export default function Success() {
  return (
   <>
        <Menuheader/>
        <div>
            <h3>Order has been placed successfully!</h3>
            <div className="alert alert-success" role="alert">
                You will receive notification by email with order details
            </div>
           
            <button className='btn btn-dark'>Go an order some more</button>
        </div>
   </>
  )
}
