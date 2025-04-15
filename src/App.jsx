import { useState } from 'react'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Education from './Component/Education'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
 
function App() {


  return (
    <Router>
      <div className='overflow-x-hidden flex'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
