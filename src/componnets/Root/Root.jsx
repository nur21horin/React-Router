import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'
import Footer from '../footer/Footer'
import Sidebar from '../SideBar/Sidebar'
import './Root.css'
const Root = () => {
  return (
    <div>
      <Header/>
      <div className='root-main'>
        <Sidebar/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Root
