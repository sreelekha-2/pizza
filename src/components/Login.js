import React, { useEffect, useState } from 'react'
import Headerone from './Headerone'
import {Link,useNavigate} from "react-router-dom"
import { getUsers } from '../config/Myservice'
import { useDispatch } from 'react-redux'
import { displayText } from '../redux/total'


export default function Login() {

  const [state,setState]=useState({email:"",password:""})

  const [users,setUsers]=useState([])

  const [error,setError]=useState(false)
  const [error2,setError2]=useState(false)
  const [error3,setError3]=useState(false)

  const [text,setText]=useState("")
  const [text2,setText2]=useState("")
  const [text3,setText3]=useState("")

  const navigate=useNavigate()

  const dispatch=useDispatch()


  useEffect(()=>{
    getUsers()
    .then(res=>{
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(err=>console.log(err))  
  },[])

  const loginForm=(event)=>{
    event.preventDefault()
    let result=validateform()
  
    if(result){
      navigate("/menu")
    }
  }

let res3;
  const validateform=()=>{
     
      let res1=emailValidate()
      let res2=passwordValidate()
      if(res1 && res2){
        res3= checkWithUsers()
      }
      return res1 && res2 && res3
  }

  const handler=(event)=>{
     const {name,value}=event.target
     setState({...state,[name]:value})

  }



  const emailValidate=()=>{
    
    let subText=state.email.substring(state.email.indexOf('@')+1);
    if(state.email===""){
        setError(true)
        setText("Required*")
        return false
    }
    else if(!state.email.includes('@')||subText==='') {
        setError(true)
        setText('Enter valid Email');
        return false;
    }
    else{
        setError(false)
        setText("")
        return true
    }
   

  }
  const passwordValidate=()=>{
    let reg=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
      
      if(state.password===""){
        setError2(true)
        setText2("Required*")
        return false
      }
     
      else if(reg.test(state.password)===false){
        setError2(true)
        setText2("Password should contain one small, one capital letter,one special character and one number")
        return false
    }
    else{
        setError2(false)
        setText2("")
        return true
    }
     }

    const checkWithUsers=()=>{
        let response=users.some(user=>user.email===state.email && user.password===state.password)
        let userArr=users.filter(user=>user.email===state.email && user.password===state.password)
        
        
        if(response){
          console.log(response)
          localStorage.setItem("loginUser",JSON.stringify(userArr[0].username))
          dispatch(displayText(userArr[0].username))
          setError3(false)
          return true
        }
        else{
          setError3(true)
          setText3("Email and Password does not exist")
          return false
        }
    
    }
     

  return (
    <>
    <Headerone/>
    <div>
        <h3>Login</h3>
        <form onSubmit={loginForm}>
            
                <input type="email" placeholder="email" name="email" className="form-control mb-3" onChange={handler} onBlur={emailValidate} />
                {error?<p className="text-danger">{text}</p>:""}
                <input type="password" placeholder="password" name="password" className="form-control mb-3" onChange={handler} onBlur={passwordValidate}/>
                {error2?<p className="text-danger">{text2}</p>:""}
                <input type="submit" value="Login" className="btn btn-secondary"/>
                {error3?<p className="text-danger">{text3}</p>:""}

                {/* <Link to="/menu" className="btn btn-secondary">Login</Link> */}
            
        </form>
    </div>
    </>
  )
}
