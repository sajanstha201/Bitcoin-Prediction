import breadcumb from '../static/media/breadcumb.png'
import aboutus_img from '../static/media/about.png'
import device_img from '../static/media/device.png'
import './AboutUs.css'
import {GuideAboutUs} from '../components/AboutUs'
export function AboutUs(){
    class Guide{
        constructor(head,message){
            this.head=head
            this.message=message
        }
    }
    const guide1=new Guide('CREATE ACCOUNT','Research and select a reputable cryptocurrency exchange platform that supports the cryptocurrency you want to buy. Popular options include Coinbase, Binance, and Kraken. Create an account on the chosen exchange and complete any required identity verification steps.')
    const guide2=new Guide('DEPOSIT MONEY','Once your account is set up and verified, deposit funds into your exchange account using a bank transfer, credit/debit card, or other supported payment methods. Make sure to review any fees associated with depositing funds.')
    const guide3=new Guide('BUY CRYPTOCURRENCIES','After depositing funds, navigate to the trading section of the exchange and select the cryptocurrency you want to buy. Enter the amount you wish to purchase and review the transaction details, including the current market price and any associated fees and place your order.')

    return(
<div className="aboutus_container">
    <div className="aboutus_upper_container" style={{background:'linear-gradient(to right, #0d104d, #28408b)'}}>
        <h3 className="aboutus_heading">About Us</h3>
    <img src={breadcumb} alt="bitcoin_image" className="img_breadcumb"></img>
    </div>
    <div style={{position:'relative',width:'50%',height:'500px'}}>
            <img src={aboutus_img} style={{position:'absolute',left:'20%',top:'100px'} }alt="aboutus_img"></img>
            <div style={{width:'50%',position:'absolute',left:'100%',top:'100px'}}>
            <h1>Let’s change the world together</h1>
            <p>At Cryptos, we're dedicated to revolutionizing the way you engage with cryptocurrency and financial markets. Our team is passionate about providing users with innovative tools and insights to navigate the ever-changing landscape of digital assets. With a commitment to transparency, security, and user experience, we strive to empower individuals worldwide to make informed decisions and unlock their financial potential. Join us on this exciting journey as we shape the future of finance together.</p>
         </div>
    </div>
    <div style={{width:'100%',height:'1000px',backgroundColor:'#222429',position:'relative'}}>
            <div className="guide_head" style={{width:'100%',height:'100px',color:'white'}}>
                <h2>Simple guide to buy</h2>
                <h2>Cryptocurrencies</h2>
            </div>
            <div style={{width:'50%',height:'80%',color:'white'}}>
                <GuideAboutUs obj={guide1}></GuideAboutUs>
                <GuideAboutUs obj={guide2}></GuideAboutUs>
                <GuideAboutUs obj={guide3}></GuideAboutUs>
            </div>
            <div>
                <img src={device_img} className="device_img" alt="device_m"></img>
            </div>
    </div>
    <div className="video_guide">
        <div style={{width:'40%'}} className="video_text">
            <h2>The begginer’s guide to Crypto</h2>
            <p>Embark on your journey into the world of Bitcoin with the comprehensive beginner's guide. Whether you're curious about the basics of cryptocurrency or eager to start investing, this guide offers clear explanations, practical tips, and essential insights to help you navigate the exciting landscape of Bitcoin with confidence. Get ready to unlock the potential of digital currency and take your first steps towards financial empowerment.</p>
        </div>
    </div>

</div>
    )
}