import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
      <small>Thank you for visiting website</small>
      <Link to={'/'}>terms</Link>
      <Link to={'/'}>conditions</Link>
    </div>
  )
}

export default Footer
