

import {createSlice} from "@reduxjs/toolkit"

let arr
if(localStorage.getItem("pizzacart")!=undefined){
    arr=JSON.parse(localStorage.getItem("pizzacart"))   
}
else{
    arr=[]
}

export const cartSlice=createSlice({
    name:"cartcounter",
    initialState:{
        count:arr.length
    },
    reducers:{
        updateCartCount:(state)=>{
            if(localStorage.getItem("pizzacart")!=undefined){
                const arr=JSON.parse(localStorage.getItem("pizzacart"))
                state.count=arr.length
            }
        }
    }
   
    

})

export const {updateCartCount}=cartSlice.actions
export default cartSlice.reducer