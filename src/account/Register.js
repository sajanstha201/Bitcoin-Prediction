import axios from "axios"
import { useState } from "react"
import {Navigate} from "react-router-dom"
import './Register.css'
export function Register({BASE_URL}){
    const [form,setForm]=useState({
        firstname:'',
        lastname:'',
        email:'',
        username:'',
        password:'',
    })
    const [registerSuccess,setRegisterSuccess]=useState(false)
    const [pwd2,setpwd]=useState(null)
    const [isvalid,setvalidation]=useState(false)
    const updateForm=(event)=>{
        const {name,value}=event.target
        setForm({
        ...form,[name]:value
    })
    }
    const submit_form= async ()=>{
        try{
            await axios.post(BASE_URL+'/account/register/',form)
                    .then(response=>{
                        if(response.status>=200&&response.status<=300){
                            console.log(response.data)
                            if(response.data['detail']==='success'){
                                console.log("success register")
                                setRegisterSuccess(true)
                                alert('Successfully Registration')
                            }
                            else{
                                alert('Already exist email or username')
                            }
                            
                        }
                    }
                    )
                    .catch(error=>{
                        console.log(error)
                    }
            )
        }
        catch(error){
            console.log(error)
        }
    }

    if(registerSuccess){
        return <Navigate to='/Bitcoin-Prediction/login'/>
    }
    const checkAll=()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(form['firstname']==='')alert('Enter Firstname')
        else if(form['lastname']==='')alert('Enter Lastname')
        else if(!emailRegex.test(form['email']))alert('Invalid Email')
        else if(form['email'===''])alert('Enter Email')
        else if(form['username'===''])alert('Enter UserName')
        else if(form['password']==='')alert('Enter Password')
        else if(pwd2==='')alert('Enter Password')
        else if(form['password']!==pwd2)alert('MisMatch Password')
        else return setvalidation(true)
        setvalidation(false)
        return
    }
    return(<>
        <div className="outer">
        <h1>Registration Form</h1>
        <br/>
        <div className="container">
            <div className="registration-form">
                <div className="input-group">
                    <label for="firstname">First Name</label>
                    <input type='text' name="firstname"value={form.firstname} onChange={updateForm}required/>
                </div>
                <div className="input-group">
                    <label for="lastname">Last Name</label>
                    <input type='text' name="lastname" value={form.lastname} onChange={updateForm} required/>
                </div>
                <div className="input-group">
                    <label for="email">Email</label>
                    <br/>
                    <input type='text' name="email" value={form.email} onChange={updateForm} required/>
                </div>
                <div className="input-group">
                    <label for="username">Username</label>
                    <input type='text' name="username" value={form.username} onChange={updateForm} required/>
                </div>
                <div className="input-group">
                    <label for="password1">Password</label>
                    <br/>
                    <input type='password' name="password" onChange={updateForm} required/>
                </div>
                <div className="input-group">
                    <label for="password2">Confirm Password</label>
                    <input type='password' name="confirmpassword" onChange={(event)=>{setpwd(event.target.value)}} required/>
                </div>
                <button onClick={()=>{
                    checkAll()
                    if(isvalid)submit_form()
                    }}>Submit</button>
            </div>
        </div>
    </div>
        </>
    )
}