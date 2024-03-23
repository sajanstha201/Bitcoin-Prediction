import './Home.css'
import breadcumb from '../static/media/breadcumb.png'
import {News} from '../components/Home'
import { BitcoinFeature } from '../components/Home'
import {Navigate,Link} from 'react-router-dom'
import { useState } from 'react'
export function Home({userLogout,BASE_URL}){
    const [getGraph,setGetGraph]=useState(false)
    if(getGraph){
        return <Navigate to={`//${BASE_URL}ml/graph`}></Navigate>
    }
    return(
<div>
    <div className="upper_container"style={{width:'100%',background:'linear-gradient(to right, #0d104d, #28408b)'}}>
        <div style={{width:'300px',height:'100%',position:'absolute',left:'20%',top:'30%'}}>
        <h2 style={{color:'white',lineHeight:'1.3',font:'30px',fontFamily:'inherit',fontWeight:'600'}}>Take a step into the </h2>
        <span style={{color:'#ffaf02'}}>Crypto World</span>
        <h6 style={{color:'white',marginBottom:'60px',lineHeight:'2',fontWeight:'400'}}>Bitcoin Prediction: Your pocket fortune-teller for smart investing. Real-time forecasts, maximum returns, effortless insights.</h6>
        
        <button onClick={()=>{setGetGraph(true)}}>SHOW PRICE</button>
        <br></br>
        <br></br>
        <Link to='/Bitcoin-Prediction/prediction'><button  style={{display:userLogout?'none':'block'}}>PREDICT PRICE</button></Link>
        </div>
        
        <img alt="breadcumb" className="breadcumb_img" src={breadcumb}></img>
        
    </div>
    <div style={{textAlign:'center',paddingLeft:'30%',paddingRight:'30%'}}>
   
    </div>
    <BitcoinFeature></BitcoinFeature>
    <News></News>
    <div>

    </div>
</div>
    )
}