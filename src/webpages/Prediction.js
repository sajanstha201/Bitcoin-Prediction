import './Prediction.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
export function Prediction(){
    const BASE_URL='http://127.0.0.1:8000'
    const [response,setResponse]=useState([])
    useEffect(()=>{
        const get_graph= async ()=>{
            try{
                const response=await axios.get(BASE_URL+'/api/graph/')
                setResponse(response.data)
                console.log(response.data)
            }
            catch(error){
                console.log("SAJAN: Graph Error:",error)
            }
            
        }
        const get_graph_authenticated= async ()=>{
            try{
                const response=await axios.get(BASE_URL+'/api/graph-authenticated/',
                {headers:{
                    'Authorization':'Token '+localStorage.getItem('token')
                }})
                setResponse(response.data)
            }
            catch(error){
                console.log("SAJAN: Graph Error:",error)
            }
            
        }
        if(localStorage.getItem('token')!=null) get_graph_authenticated()
        else get_graph()

        
    },[])
    return(
        <div>
            <div className="contact_upper_container" style={{background:'linear-gradient(to right, #0d104d, #28408b)'}}>
                <h3 className="contact_heading">Prediction</h3>
            </div>
                <div style={{textAlign:'center'}}>
                    <h2 style={{padding:'50px'}}>NEXT 15 DAY PREDICTION</h2>
                {response.map((response, index) => (
                    <div key={index}>
                        <h2>{response.name}</h2>
                    <img src={`data:response/png;base64,${response.data}`} alt={response.name} />
                    </div>
                ))}
                </div>
            
        </div>
    )
}