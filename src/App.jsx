import './App.css'
import { HashRouter as Router, Route, Routes, } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import Explore from './Pages/Explore'
import LoginPage from './Pages/LoginPage';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TermsPage from './Pages/TermsPage';
import AboutUsPage from './Pages/AboutUsPage';
import Footer from './Components/Footer';
import RefundPolicy from './Pages/RefundPolicy';
import Payment from './Pages/Payment';
import PrivacyPolicy from './Pages/PrivacyPolicy';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin=()=>{
    setLoggedIn(true)
    console.log("logged in");
  }

  const handleLogout=()=>{
    setLoggedIn(false)
  }

  return (
    <Router>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage handleLogin={handleLogin} />}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/terms' element={<TermsPage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/refund-policies' element={<RefundPolicy/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
