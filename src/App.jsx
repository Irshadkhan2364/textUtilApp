import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';

function App() {
   const [mode, setMode] = useState('light');
   
   const toggleMode =()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = "#2e3236"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
   }
  return (
    <>
    <BrowserRouter>
        <Navbar  mode={mode} toggleMode={toggleMode} />
        <Routes>
            <Route path={"/"} element={<Home heading="Enter The Text"  mode={mode}/>} />
            <Route path={"/about"} element={<About heading="this is About Props"/>} />
        </Routes>
    </BrowserRouter>
    {/* <Home /> */}
       
    </>
  )
}

export default App
