import {Link,Navigate} from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
export function Navbar({userDetail,setUserDetail,userLogout,setUserLogout}){
    const logout_triggerred=()=>{
        setUserDetail({
            'detail':'',
            'user_data':''
        })
        setUserLogout(true)
        localStorage.clear()
    }
    
    return(

        <>
        <div className="navbar">
        <Link to='/Bitcoin-Prediction'className="bitcoin"> Bitcoin</Link>
            <div className="buttons">
                <Link to='/Bitcoin-Prediction/contact'>Contact</Link>
                <Link to='/Bitcoin-Prediction/about-us'>AboutUs</Link>
                <Link to='/Bitcoin-Prediction/calculator'>Currency calculator</Link>
                <Link to='/Bitcoin-Prediction/login' style={{display:(userLogout)?'block':'none'}}>Login</Link>
                <a onClick={logout_triggerred} style={{display:(userLogout)?'none':'block'}}>Logout</a>
                <Link to='/Bitcoin-Prediction/faq'>FAQ</Link>
                <p style={{display:(userLogout)?'none':'block'}} className='hello_user'>Hello {localStorage.getItem('first name')}</p>
            </div>
        </div>
        </>
    )
}
