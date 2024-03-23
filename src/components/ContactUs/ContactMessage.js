import './ContactMessage.css'
import {useState} from 'react'
import {Navigate} from "react-router-dom"
import axios from 'axios'
export function ContactMessage({BASE_URL}){
    const [query,setQuery]=useState({
        'name':'',
        'email':'',
        'message':''
    })
    const [successPost,setSuccessPost]=useState(false)
    const updateInput=(event)=>{
        const {name,value}=event.target
        setQuery({
            ...query,
            [name]:value
        })
    }
    const is_valid=()=>{
        if(query['name']===''){
            alert('Empty name')
            return false
        }
        if(query['message']===''){
            alert('Empty Message')
            return false
        }
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(query['email'])){
            alert("invalid email")
            return false
        }
        return true;

    }
    const saveQuery=async ()=>{
        try{
            const response=await axios.post(BASE_URL+'api/post-query/',query)
            setQuery({
                'name':'',
                'email':'',
                'message':''
            })
            if(response.data['detail']==='success')setSuccessPost(true)
            else setSuccessPost(false)
        }
        catch(error){
            setSuccessPost(false)
            console.log("save Query Error: ",error)
        }
    }
    return(
        <div className="comment_input">
            <input type="text" name="name" value={query['name']} id="name" placeholder="Name" onChange={updateInput}required/>
            <input type="email" name="email" value={query['email']} id="email" placeholder="E-mail" onChange={updateInput}required/>
            <textarea name="message" id="message" cols="30" rows="10" value={query['message']}placeholder="Message" onChange={updateInput}required>
            {query['message']} 
            </textarea>
             <button onClick={()=>{if(is_valid())saveQuery()}}>Contact Us</button>
             <div style={{display:successPost?'block':'none',fontStyle:'italic'}}>
                <h4 style={{color:'black'}}>Thank you for contacting us. Your team will reach out to you shortly.</h4>
                <h4 style={{color:'black',margin:'auto'}}>We appreciate your interest and look forward to assisting you.</h4> 
             </div>
         </div>
    )
}