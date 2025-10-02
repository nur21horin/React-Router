import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'

const Root = () => {
  return (
    <div>
      <Header/>
      <Outlet>
        
      </Outlet>
      <Footer/>
    </div>
  )
}

export default Root
