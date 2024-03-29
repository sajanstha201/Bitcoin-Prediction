import './Footer.css'
import new2 from '../static/media/new2.png'
import {Link} from 'react-router-dom'
export function Footer(){
    return(
        <div className="footer">

<div class="footer-area">
        <div class="top">
            <img src={new2} alt="" className='new2_img'/>
        </div>
        <div className="bottom">
            <div className="text">
                <p>Join thousands of users worldwide who trust our app for accurate predictions and seamless currency
                    conversions. Take control of your financial future today with our user-friendly interface and
                    cutting-edge technology. Download now and unlock the power of informed decision-making at your
                    fingertips.</p>
            </div>
            <div class="links">
                <Link to=' '>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about-us'>AboutUs</Link>
                <Link to='/faq'>FAQ</Link>
            </div>
        </div>

    </div>
            
        </div>
    )
}