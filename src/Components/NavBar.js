import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { HiMenuAlt2 } from 'react-icons/hi';

import { MainContext } from '../Hooks/Context/MainContext';

function NavBar() {

    const { side_show, setSide_show } = useContext(MainContext);
  return (
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
  )
}

export default NavBar