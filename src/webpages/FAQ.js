import './FAQ.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import breadcumb from '../static/media/breadcumb.png'
export function FAQ({BASE_URL}){
    const [faq,setFaq]=useState([])
    useEffect(()=>{
        const request_faq =async()=>{
            try{
                const response=await axios.get(BASE_URL+'api/faq/')
                console.log(response.data)
                if(response.data['detail']==='success'){
                    setFaq(response.data['data'])
                }
            }
        catch(error){
            console.log("FAQ: Error"+error)
        }
        }
        request_faq()
    },[])
    console.log(faq)
    return(
        <>
        <div className="contact_upper_container" style={{background:'linear-gradient(to right, #0d104d, #28408b)'}}>
        <h3 className="contact_heading">Frequently Asked Questions</h3>
    <img src={breadcumb} alt="bitcoin image" className="img_breadcumb"></img>
    </div>
<div className="faq_container">
<div class="col-25 col-md-10">
            <div class="about-content mb-300">
                <div class="section-heading">
                    {
                        faq.map((element)=>(
                            <div>
                                <h2 style={{color:'rgb(255, 175, 2)'}}>{element['question']}</h2>
                                <h4 style={{marginBottom:'30px'}} >{element['answer']}</h4>
                                </div>
                        ))
                    }
        </div>
    </div>
</div>
</div>

        </>
    )
}