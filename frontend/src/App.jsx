import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ContactUs from './pages/Contact/ContactUs'
import Footer from './components/Footer'
import AboutUs from './pages/about/AboutUs'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      
    
    </Routes>
<Footer/>
    
    </BrowserRouter>
  )
}

export default App
