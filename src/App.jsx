import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Converter from './Components/Converter'

function App() {

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
       <Converter/>
    </div>
    
  )
}

export default App
