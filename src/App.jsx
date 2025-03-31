import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'

function App() {
 

  return (
   <div className='overflow-x-hidden flex '>
    <Navbar/> 
    <Hero/>

   </div>
  )
}

export default App
