import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Register,Login} from './account'
import  {Navbar,Footer} from './components'
import { Home,AboutUs,Contact,CurrencyCalculator,FAQ, Prediction} from './webpages'
import { useState } from 'react'
function App() {
  const [userDetail,setUserDetail]=useState({'detail':'','user_data':''})
  const [userLogout,setUserLogout]=useState(localStorage.getItem('token')===null)
  const [BASE_URL,setBASE_URL]=useState('http://127.0.0.1:8000/')
  return (
    <div className="app_container">
    <BrowserRouter>
    <Navbar userDetail={userDetail} setUserDetail={setUserDetail} userLogout={userLogout} setUserLogout={setUserLogout} />
    <div style={{minHeight:'500px'}}>
    <Routes>
      <Route path='/Bitcoin-Prediction' element={<Home userLogout={userLogout}></Home>}></Route>
      <Route path='/Bitcoin-Prediction/register' element={<Register BASE_URL={BASE_URL}></Register>}></Route>
      <Route path='/Bitcoin-Prediction/login' element={<Login setUser={setUserDetail} setUserLogout={setUserLogout} BASE_URL={BASE_URL}/>}></Route>
      <Route path='/Bitcoin-Prediction/calculator' element={<CurrencyCalculator BASE_URL={BASE_URL}r></CurrencyCalculator>}></Route>
      <Route path='/Bitcoin-Prediction/about-us' element={<AboutUs></AboutUs>}></Route>
      <Route path='/Bitcoin-Prediction/contact' element={<Contact BASE_URL={BASE_URL}></Contact>}></Route>
      <Route path='/Bitcoin-Prediction/faq' element={<FAQ BASE_URL={BASE_URL}></FAQ>}></Route>
      <Route path='/Bitcoin-Prediction/prediction' element={<Prediction BASE_URL={BASE_URL}></Prediction>}></Route>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </div>

  );
}

export default App;
