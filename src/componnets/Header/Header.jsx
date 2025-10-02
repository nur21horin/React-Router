import React from 'react'
import { Link } from 'react-router'
import './header.css'
import { NavLink } from 'react-router'
const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav className='gap-[50px] flex items-center justify-center '>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/mobiles'}>Mobiles</NavLink>
        <NavLink to={'/laptops'}>Laptop</NavLink>
      </nav>
    </div>
  )
}

export default Header
