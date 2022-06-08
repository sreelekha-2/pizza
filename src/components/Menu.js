import React,{useState,useEffect} from 'react'
import Menuheader from './Menuheader'
import { getProducts } from '../config/Myservice'

import { getProductById } from '../config/Myservice'

import { updateCartCount } from '../redux/counter'

import { updatePrice } from '../redux/total'

import {useDispatch} from "react-redux"


export default function Menu() {

  const [products,setProducts]=useState([])

  const dispatch=useDispatch()

  useEffect(()=>{
      getProducts()
      .then(res=>setProducts(res.data))
      .catch(err=>console.log(err))
  },[])

  const addToCart=(id)=>{
    getProductById(id)
    .then(res=>{
      if(res){
        if(localStorage.getItem("pizzacart")!=undefined){
          const arr=JSON.parse(localStorage.getItem("pizzacart"))
          if(arr.some(item=>item.id===id))
          {
            alert("product already added to cart")
          }
          else{
            arr.push(res.data)
            localStorage.setItem("pizzacart",JSON.stringify(arr))
            dispatch(updateCartCount())
            dispatch(updatePrice())

            alert("product added")
          }
        }
        else{
          const arr=[]
          arr.push(res.data)
          localStorage.setItem("pizzacart",JSON.stringify(arr))
          dispatch(updateCartCount())
          dispatch(updatePrice())
          alert("product added")
        }
      }
    })

    .catch(err=>console.log(err))
   
  }
  return (
    <>
        <Menuheader/>

        <div>
            <h3 className="my-3">Menu</h3>
            <div className="d-flex flex-wrap justify-content-center ">
            {products.map(product=>
              <div key={product.id} className="card w-25 mb-3  me-3 p-3 d-flex flex-column align-items-center" >
  <img src={product.image} className="card-img-top w-75 " alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">{product.name}</h5>
 
    <div className="d-flex align-items-center justify-content-center mt-3">
      <button  className="btn btn-dark" onClick={()=>addToCart(product.id)} >Add to Cart</button>
      <p className="card-text ms-3">{`$${product.price}`}</p>
    </div>
    
  </div>
</div>
              )}
            </div>
         
           
        </div>
    </>
  )
}
