import SideNav from '@/components/nav/SideNav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../styles/scroll-bar.css"
const DashBoard = () => {
  return (
    <div className='bg-[#F5F5F5] lg:bg-[#F4F4F4] lg:px-14    w-full lg:flex    lg:gap-6 lg:py-0 '>
      <SideNav />
    <div className=' w-full h-screen overflow-auto  hide-scrollbar'>
        <Outlet/>
    </div>
    </div>
  )
}

export default DashBoard