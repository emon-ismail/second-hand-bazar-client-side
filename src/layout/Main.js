import React from 'react'
import { Outlet } from 'react-router-dom'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Toggle from '../components/Toggle'

const Main = () => {
  return (
    <>
    {/* <Toggle></Toggle> */}
      <Navbar />
      
      
      <Outlet />
      
      <Footer></Footer>
    </>
  )
}

export default Main
