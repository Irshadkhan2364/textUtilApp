// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  // const [mode, setMode] = useState('light');

  // if(mode === 'light'){
  //   // setMode("")
  // }

  return (
   <>
    <Header/>
    <Tasks />
   </>
  )
}

export default App
