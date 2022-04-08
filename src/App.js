import './App.css';

import { Link, Routes, Route } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi'
import { HiMenuAlt2 } from 'react-icons/hi'
import { useState } from 'react';

import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {

  const [side_show, setSide_show] = useState(false);
  return (
    <>
      <header className='NavBar'>

        <div className='menu_icon_container' >
          {side_show?
            <HiMenu className='menu_icon' onClick={() => setSide_show(!side_show)}/>
          :
            <HiMenuAlt2 className='menu_icon' onClick={() => setSide_show(!side_show)}/>
          }
        </div>

        <div className='logo_contaciner'>
          <h1>Logo App</h1>
        </div>

        <div className='links'>
          <Link to='/' className='' >Home</Link>
          <Link to='/about' >About</Link>
          <Link to='/contact' >Contact</Link>
        </div>

        
      </header>
      
      <main>
        <nav className={side_show ? 'SideBar active' : 'SideBar'}>
          <Link to='/' className='' >Home</Link>
          <Link to='/about' >About</Link>
          <Link to='/contact' >Contact</Link>
        </nav>

        <div className={side_show ? 'Main_content active' : 'Main_content'}>
          <Routes>
            <Route path='/' element={< Dashboard />} />
            <Route path='/about' element={< About />} />
            <Route path='/contact' element={< Contact />} />
          </Routes>
        </div>
      </main>

    </>
  );
}

export default App;
