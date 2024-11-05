import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import BannerLogo from './BannerLogo'
import Sidebar from './Sidebar'
import ProfileBanner from './ProfileBanner'

const Navigation = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-black  border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <BannerLogo/>
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
              Dashboard
            </span>
          </Link>
          
          <ProfileBanner/>
        </div>
        
      </nav>
      <div className='flex'>
      <Sidebar/>
      <div className='w-full m-5 p-4  '>
      <Outlet />
      </div>
      </div>
      

    
    </>

  )
}

export default Navigation