import './ContactManipal.css'
import new2 from '../../static/media/new2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMap ,faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export function ContactManipal(){
    return(
        <>
        <a href="#"><img src={new2} alt="bitcoin"/></a>
            <div className="icons">
            <a href="https://www.pinterest.com"><FontAwesomeIcon icon={faPinterest} /></a>
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <div className="manipal_contact">
                <a href="#"><FontAwesomeIcon icon={faMap} /></a>
                <p>MANIPAL INSTITUTE OF TECHNOLOGY BANGALORE, INDIA</p>
                <br></br>
                <a href="#"><FontAwesomeIcon icon={faPhone} /></a>
                <p>
                <p>Main: 203-808-1234</p><p> Office: 203-808-5678</p>
                </p>
                <br></br>
                <a href="#">  <FontAwesomeIcon icon={faEnvelope} /></a>
                <p>sajanstha201.55@gmail.com</p>
            </div>
        </>
    )
}