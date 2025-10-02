import React from 'react'
import { Link } from 'react-router'
import './header.css'
const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav className='gap-[50px] flex items-center justify-center '>
        <Link to={'/'} >Home</Link>
        <Link to={'/mobiles'}>Mobiles</Link>
        <Link to={'/laptops'}>Laptop</Link>
      </nav>
    </div>
  )
}

export default Header
