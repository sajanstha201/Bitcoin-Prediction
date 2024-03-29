import './Login.css'
import { useState } from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
export function Login({setUser,setUserLogout,BASE_URL}){
    const [form,setForm]=useState({
        "username":"",
        "password":""
    })
    const [userValid,userValidation]=useState(false)
    const updateForm=(event)=>{
        const {value,name}=event.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const apply_login=async ()=>{
        try{
            const response=await axios.post(BASE_URL+'account/login/',form)
            if(response.data['detail']==='success'){
                localStorage.setItem('token',response.data['token'])
                localStorage.setItem('first name',response.data['user_data']['first_name'])
                setUser({'detail':response.data['detail'],'user_data':response.data['user_data']})
                userValidation(true)
                setUserLogout(false)
            }
            if(response.data['detail']==='fail'){
                alert(response.data['message'])
            }
        }
        catch(error){
            console.log(error)
        }
    }
    if(userValid){
        console.log(userValid)
        return <Navigate to='/'/>
    }
    return(
        <>
        <div className="outer">
        <h1>Login</h1>
        <br/>
        <div className="container">
            <div className="login-form">
                <div className="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" onChange={updateForm}required/>
                </div>
                <div className="input-group">
                    <label for="password">Password</label>
                    <br/>
                    <input type="password" id="password" name="password" onChange={updateForm}required/>
                </div>
                <div className="button-group">
                    <button type="submit" onClick={apply_login}>Login</button>
                    <Link to='/register'>
                        <button type="button" className="signup-btn">Sign Up</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
        </>
    )
}