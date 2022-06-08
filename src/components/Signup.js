import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Headerone from './Headerone'
import { addUserDetails } from '../config/Myservice'


export default function Signup() {

    const [state,setState]=useState({username:"",email:"",password:"",mobile:""})

    const [error,setError]=useState(false)
    const [error2,setError2]=useState(false)
    const [error3,setError3]=useState(false)
    const [error4,setError4]=useState(false)
   

    const [text,setText]=useState("")
    const [text2,setText2]=useState("")
    const [text3,setText3]=useState("")
    const [text4,setText4]=useState("")

    const navigate=useNavigate()

    const handler=(event)=>{
        const {name,value}=event.target
        setState({...state,[name]:value})

    }

    const saveDetails=(event)=>{
        event.preventDefault()
        let result=validateform()
        if(result){
            addUserDetails(state)

            // localStorage.setItem("sigupDetails",JSON.stringify(state))
            navigate("/")
        }
    }

    const validateform=()=>{ 
            let res1=nameValidate()
            let res2=emailValidate()
            let res3=passwordValidate()
            let res4=mobileValidate() 
            return res1 && res2 && res3 && res4     
    }

    const nameValidate=()=>{
        let regEx=new RegExp("^[A-Za-z]*$")
        if(state.username===""){
            setError(true)
            setText("Required*")
            return false
        }
        else if(!regEx.test(state.username)){
            setError(true)
            setText("Name should contain only alphabets")
            return false
        }
        else{
            setError(false)
            setText("")
            return true
        }
    }

    const emailValidate=()=>{
        let subText=state.email.substring(state.email.indexOf('@')+1);
        if(state.email===""){
            setError2(true)
            setText2("Email should not be empty")
            return false
        }
        else if(!state.email.includes('@')||subText==='') {
            setError2(true)
            setText2('Enter valid Email');
            return false;
        }
        else{
            setError2(false)
            setText2("")
            return true
        }
    }
    const passwordValidate=()=>{
        let reg=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
        if(state.password===""){
            setError3(true)
            setText3("Password should not be empty")
            return false
        }
        else if(reg.test(state.password)===false){
            setError3(true)
            setText3("Password should contain one small, one capital letter,one special character and one number")
            return false
        }
        else{
            setError3(false)
            setText3("")
            return true
        }
    }
    const mobileValidate=()=>{
        let reg=new RegExp('^[0-9]*$')
        if(state.mobile===""){
            setError4(true)
            setText4("Mobile number should not be empty")
            return false
        }
        else if (reg.test(state.mobile)==false){
            setError4(true)
            setText4('the number should contain only numbers');
            return false;
        }
        else if(state.mobile.length<10 || state.mobile.length>10){
            setError4(true)
            setText4("Invalid mobile number")
            return false
        }
        else{
            setError4(false)
            setText4("")
            return true
        }
    }

  return (
    <>
    <Headerone/>
    <div>
        <h3>Sign Up</h3>
        <form onSubmit={saveDetails}>

            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control mb-3" onChange={handler} onBlur={nameValidate}/>
                {error?<p className="text-danger">{text}</p>:""}
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control mb-3" onChange={handler} onBlur={emailValidate}/>
                {error2?<p className="text-danger">{text2}</p>:""}
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password"  className="form-control mb-3" onChange={handler} onBlur={passwordValidate}/>
                {error3?<p className="text-danger">{text3}</p>:""}
            </div>

            <div className="form-group">
                <label>Mobile</label>
                <input type="number" name="mobile"  className="form-control mb-3" onChange={handler} onBlur={mobileValidate}/>
                {error4?<p className="text-danger">{text4}</p>:""}
            </div>
               
                
                <input type="submit" value="Sign Up" className="btn btn-secondary"/>
            
        </form>
    </div>
    </>
  )
}
