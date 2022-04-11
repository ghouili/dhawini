import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { MainContext } from '../Hooks/Context/MainContext';

function SideBar() {

    const { side_show, setSide_show } = useContext(MainContext);
    const location = useLocation();

  return (
    <nav className={side_show ? 'SideBar active' : 'SideBar'}>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''} >Home</Link>
        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}  >About</Link>
        <Link to='/contact' className={location.pathname === '/contact' ? 'active' : ''}  >Contact</Link>
    </nav>
  )
}

export default SideBar