import breadcumb from '../static/media/breadcumb.png'
import './Contact.css'
import {ContactManipal,ContactMessage} from '../components/ContactUs'


export function Contact({BASE_URL}){
    return(
<div className="contact_container">
    <div className="contact_upper_container" style={{background:'linear-gradient(to right, #0d104d, #28408b)'}}>
        <h3 className="contact_heading">Contact</h3>
    <img src={breadcumb} alt="bitcoin image" className="img_breadcumb"></img>
    </div>
    <div style={{width:'100%',height:'300px',alignItems:'center'}}>
        <div style={{margin:'auto',padding:'50px',width:'500px',textAlign:'center'}}>
            <h2 style={{color:'black'}}>Get in touch </h2><br/>
            <h2>with us</h2><br/>
            <p>We're here to help! Whether you have questions, feedback, or need assistance, getting in touch with us is easy. Simply fill out the form below, and our dedicated team will respond promptly to address your inquiries and provide the support you need. We value your input and look forward to assisting you on your journey.</p>
        </div>           
    </div>
    <div className="comment">
        <div className="contact_link">
            <ContactManipal/>
        </div>
        <div className="comment_out">
            <ContactMessage BASE_URL={BASE_URL}/>
        </div>
    </div>
</div>
    )
}