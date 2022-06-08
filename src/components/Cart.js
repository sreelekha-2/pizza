import React,{useState,useEffect} from 'react'
import Menuheader from './Menuheader'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { updatePrice } from '../redux/total'
import { updateCartCount } from '../redux/counter'


export default function Cart() {

    const [cartData,setCartData]=useState([])

    const navigate=useNavigate()
    const price=useSelector(state=>state.pricecounter.price)
    const dispatch=useDispatch()

    useEffect(()=>{
        if(localStorage.getItem("pizzacart")!=undefined){
            const arr=JSON.parse(localStorage.getItem("pizzacart"))
            setCartData(arr)    
        }
 
    },[])

   
           
//     const newArr=[]
//    let total=0
    // const handler=(event)=>{
    //    const {name,value}=event.target
       
    //     const filterArr=cartData.filter(product=>name===product.name)
    
    //     newArr.push(...filterArr)
    
    //     filterArr[0].quantity=value
      
        
       
    //         total=total+ newArr[0].price*newArr[0].quantity
           

    //         if(localStorage.getItem("myprice")!=undefined){
    //             const mycartprice=JSON.parse(localStorage.getItem("myprice"))
    //             mycartprice.cartprice=total
    //             localStorage.setItem("myprice",JSON.stringify(mycartprice))
    //            dispatch(updatePrice())
    //         }
    //         else{
    //             const mycartprice={}
    //             mycartprice.cartprice=total
    //             localStorage.setItem("myprice",JSON.stringify(mycartprice))
    //             dispatch(updatePrice())
    //         }
    //     //     console.log(total)
    //     //  }
        
    // }
    

    const checkout=()=>{
        navigate("/checkout")
    }

    const deleteProduct=(id)=>{
        if(localStorage.getItem("pizzacart")!=undefined){
            const arr=JSON.parse(localStorage.getItem("pizzacart"))
            const filteredArr=arr.filter(product=>product.id!==id)
            localStorage.setItem("pizzacart",JSON.stringify(filteredArr))
            setCartData(filteredArr)
            dispatch(updatePrice())
            dispatch(updateCartCount())
            
        }
    }

  return (
    <div>
        <Menuheader/>
        <h3>Shopping Cart</h3>
     
        <table className="w-100">
            <tbody>
            {cartData.map(product=>


            <tr className=" border-bottom" key={product.id}>
                <td><img src={product.image} className="product-img"/></td>
                <td><h5>{product.name}</h5></td>
                <td><p className="fw-bold">{`$${product.price}`}</p></td>
                <td><input type="number" name={product.name} defaultValue="1" /></td>
                <td><button  className="btn bg-dark text-white" onClick={()=>deleteProduct(product.id)} >Delete</button></td>



            </tr>

)}


            <tr>
                <td></td>
                <td></td>
                <td><p className="fw-bold total-price" >${price}  </p></td>
                <td></td>
                <td> <button className="btn bg-dark text-white" onClick={()=>checkout()}>Checkout {`>`} </button></td>
            </tr>
            </tbody>

        </table>

      
    </div>
  )
}
