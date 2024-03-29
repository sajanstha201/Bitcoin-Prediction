import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import {Register,Login} from './account'
import  {Navbar,Footer} from './components'
import { Home,AboutUs,Contact,CurrencyCalculator,FAQ, Prediction} from './webpages'
import { useState } from 'react'
function App() {
  const [userDetail,setUserDetail]=useState({'detail':'','user_data':''})
  const [userLogout,setUserLogout]=useState(localStorage.getItem('token')===null)
  const [BASE_URL,setBASE_URL]=useState('https://bitcoin-prediction-backend-447985c0fd7a.herokuapp.com/')
  return (
    <div className="app_container">
    <HashRouter>
    <Navbar userDetail={userDetail} setUserDetail={setUserDetail} userLogout={userLogout} setUserLogout={setUserLogout} />
    <div style={{minHeight:'500px'}}>
    <Routes>
      <Route path='' element={<Home userLogout={userLogout} BASE_URL={BASE_URL}></Home>}></Route>
      <Route path='/register' element={<Register BASE_URL={BASE_URL}></Register>}></Route>
      <Route path='/login' element={<Login setUser={setUserDetail} setUserLogout={setUserLogout} BASE_URL={BASE_URL}/>}></Route>
      <Route path='/calculator' element={<CurrencyCalculator BASE_URL={BASE_URL}r></CurrencyCalculator>}></Route>
      <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
      <Route path='/contact' element={<Contact BASE_URL={BASE_URL}></Contact>}></Route>
      <Route path='/faq' element={<FAQ BASE_URL={BASE_URL}></FAQ>}></Route>
      <Route path='/prediction' element={<Prediction BASE_URL={BASE_URL}></Prediction>}></Route>
    </Routes>
    </div>
    <Footer/>
    </HashRouter>
    </div>

  );
}

export default App;
