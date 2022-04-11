import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={< Dashboard />} />
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />
    </Routes>
  )
}

export default MainRoute