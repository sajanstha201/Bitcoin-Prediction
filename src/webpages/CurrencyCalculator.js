import './CurrencyCalculator.css'
import breadcumb from '../static/media/breadcumb.png'
import {useEffect, useState} from 'react'
import axios from 'axios'
export function CurrencyCalculator({BASE_URL}){
        const[currencyDetail,setCurrencyDetail]=useState([])
        const[Output1,setOutput1]=useState(0)
        const[Output2,setOutput2]=useState(0)
        const[Input,setInput]=useState(0)
        const [currency,setCurrency]=useState('USD')

        useEffect(()=>{
            const get_price=async()=>{
                try{
                    const response=await axios.get(BASE_URL+'api/bitcoinrate')
                    const data=response.data['data']
                    setCurrencyDetail(data)
                }
                catch(error){
                    console.log("error")
                    console.log(error)
                }
      
                }
            get_price()
            
        },[])

        const calculateBitcoinEquivalent=(event)=> {
                currencyDetail.map((element)=>{
                    if(element['currency']===currency){
                        setOutput1(Input/element['price_per_bitcoin'])
                    } 
                 })
            }
        const calculateCurrencyEquivalent=(event)=>{
            currencyDetail.map((element)=>{
                if(element['currency']===currency){
                    setOutput2(Input*element['price_per_bitcoin'])
                } 
             })
        }            
    return(
<div className="calculator_container">
    <div className="calculator_upper_container" style={{background:'linear-gradient(to right, #0d104d, #28408b)'}}>
        <h3 className="calculator_heading">calculator</h3>
    <img src={breadcumb} alt="bitcoin image" className="img_breadcumb"></img>
    </div>
    <div className="calculator_lower_container">
        <h3 style={{margin:'0px',paddingTop:'50px'}}>Cryptocurrency Calculator</h3>
        <p style={{
            paddingLeft:'30%',paddingRight:'30%',fontSize:'larger',fontWeight:'bold',color:'goldenrod'}}>Effortlessly convert between Euros, US Dollars, Bitcoin, and Indian Rupees with our intuitive currency calculator. Stay updated on exchange rates and seamlessly manage your finances across multiple currencies with ease.</p>

        <div className="bitcoin_calculator_section" style={{marginTop:'100px'}}>
            <h4 style={{marginBottom:'20px'}}>Currency to BitCoin</h4>
            <div style={{display:'inline'}} >
                <input style={{height:'30px'}}type="number" id="bitcoinSelect" name="inputNumber"  placeholder='0' onChange={(event)=>{setInput(event.target.value)}}></input>
                    <select id="bitcoinSelect" value={currency} onChange={(e)=>{
                        if(e){setCurrency(e.target.value)}}}>
                            {currencyDetail.map((element)=>(
                                <option name={element['currency']} value={element['currency']}>{element['currency']}</option>
                            ))
                            }
                    </select>
            </div>
            <div class="equal-sign" style={{color:'goldenrod',fontSize:'24px',display:'inline'}}>=</div>
            <div style={{display:'inline'}}>
                <input id="bitcoinOutput" type="number" name="outputNumber" value={Output1} readOnly/>
                <select id="bitcoinSelect">
                    <option value="BTC">Bitcoin</option>
                </select>
            </div>
            <br/>
            <br/>
            <button onClick={calculateBitcoinEquivalent}>Calculate</button>
        </div>    



        <div className="bitcoin_calculator_section" style={{marginTop:'0px'}}>
            <h4 style={{marginBottom:'20px',marginTop:'100px'}}>BitCoin to Currency</h4>

            <div style={{display:'inline'}}>
                <input id="bitcoinOutput" type="number" name="outputNumber" placeholder='0' onChange={(event)=>{setInput(event.target.value)}}></input>
                <select id="bitcoinSelect">
                    <option value="BTC">Bitcoin</option>
                </select>
            </div>

            <div class="equal-sign" style={{color:'goldenrod',fontSize:'24px',display:'inline'}}>=</div>

            <div style={{display:'inline'}} >
                <input id="bitcoinInput" type="number" name="inputNumber"  value={Output2} readOnly/>
                <select id="bitcoinSelect" value={currency} onChange={(e)=>{
                        if(e){setCurrency(e.target.value)}}}>
                            {currencyDetail.map((element)=>(
                                <option value={element['currency']}>{element['currency']}</option>
                            ))
                            }
                    </select>
            </div>
            <br/>
            <br/>
            <button onClick={calculateCurrencyEquivalent} style={{background:'green'}}>Calculate</button>
        </div>    


    </div>
</div>
    )
}