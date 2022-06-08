import React from 'react'
import Headerone from './Headerone'
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
   
    <>
    <Headerone/>
    <div className="bg-light py-5 px-4">
        <h1>Pizza Delivery</h1>
        <p>Welcome to pizza delivery service. This is the place when you may chose the most delicious pizza you like from wide variety of options!</p>
        <p>We're performing delivery free of charge in case if your order is higher than 20$</p>
        <Link to="/login" className="d-block w-100 mx-auto btn btn-secondary">Sign In and Order</Link>
    </div>
    </>
   

  )
}
