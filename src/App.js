import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Register,Login} from './account'
import  {Navbar,Footer} from './components'
import { Home,AboutUs,Contact,CurrencyCalculator,FAQ, Prediction} from './webpages'
import { useState } from 'react'
function App() {
  const [userDetail,setUserDetail]=useState({'detail':'','user_data':''})
  const [userLogout,setUserLogout]=useState(localStorage.getItem('token')===null)
  return (
    <div className="app_container">
    <BrowserRouter>
    <Navbar userDetail={userDetail} setUserDetail={setUserDetail} userLogout={userLogout} setUserLogout={setUserLogout} />
    <div style={{minHeight:'500px'}}>
    <Routes>
      <Route path='/Bitcoin-Prediction' element={<Home userLogout={userLogout}></Home>}></Route>
      <Route path='/Bitcoin-Prediction/register' Component={Register}></Route>
      <Route path='/Bitcoin-Prediction/login' element={<Login setUser={setUserDetail} setUserLogout={setUserLogout}/>}></Route>
      <Route path='/Bitcoin-Prediction/calculator' Component={CurrencyCalculator}></Route>
      <Route path='/Bitcoin-Prediction/about-us' Component={AboutUs}></Route>
      <Route path='/Bitcoin-Prediction/contact' Component={Contact}></Route>
      <Route path='/Bitcoin-Prediction/faq' Component={FAQ}></Route>
      <Route path='/Bitcoin-Prediction/prediction' Component={Prediction}></Route>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </div>

  );
}

export default App;
