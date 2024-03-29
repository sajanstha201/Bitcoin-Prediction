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
        <Link to=' 'className="bitcoin"> Bitcoin</Link>
            <div className="buttons">
                <Link to='/contact'>Contact</Link>
                <Link to='/about-us'>AboutUs</Link>
                <Link to='/calculator'>Currency calculator</Link>
                <Link to='/login' style={{display:(userLogout)?'block':'none'}}>Login</Link>
                <a onClick={logout_triggerred} style={{display:(userLogout)?'none':'block'}}>Logout</a>
                <Link to='/faq'>FAQ</Link>
                <p style={{display:(userLogout)?'none':'block',paddingLeft:'10px'}} className='hello_user'>Hello {localStorage.getItem('first name')}</p>
            </div>
        </div>
        </>
    )
}
