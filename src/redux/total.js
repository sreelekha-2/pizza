

import {createSlice} from "@reduxjs/toolkit"

let array;
let totalPrice
if(localStorage.getItem("pizzacart")!=undefined){
    array=JSON.parse(localStorage.getItem("pizzacart"))
    console.log(array)
    console.log(array.length)
    if(array.length===0){
        totalPrice=0
        
    }
    else{
        totalPrice=array.map(each=>each.price*1).reduce((acc,curr)=>acc+curr)
    }
   
}
else{
    array=[]
    totalPrice=0
}

const loginUserName=JSON.parse(localStorage.getItem("loginUser"))

export const priceSlice=createSlice({
    name:"pricecounter",
    initialState:{
        price:totalPrice.toFixed(1),
        user:loginUserName
    },
    reducers:{
      updatePrice:(state)=>{
        if(localStorage.getItem("pizzacart")!=undefined){
            array=JSON.parse(localStorage.getItem("pizzacart"))
            if(array.length===0){
                totalPrice=0    
            }
            else{
                totalPrice=array.map(each=>each.price*1).reduce((acc,curr)=>acc+curr)
            }
      
            state.price=totalPrice.toFixed(1)
        }
      },
      displayText:(state,actions)=>{
          console.log(actions.payload)
          state.user=actions.payload
      }
    }
   
    

})

export const {updatePrice,displayText}=priceSlice.actions
export default priceSlice.reducer