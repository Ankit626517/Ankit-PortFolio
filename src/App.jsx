import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Education from './Component/Education';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

function App() {
  return (
    <Router>
      <div className='overflow-x-hidden bg-gradient-to-br from-gray-900 to-black text-white min-h-screen'>
        <Navbar />
        
        {/* Add top padding to avoid overlapping with fixed navbar */}
        <div className=''>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Education' element={<Education />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
