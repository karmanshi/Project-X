import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import BannerLogo from './BannerLogo'
import Sidebar from './Sidebar'
import ProfileBanner from './ProfileBanner'

const Navigation = () => {
  return (
    <>
      <nav className="bg-black  border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <BannerLogo/>
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
              Expenses Tracker
            </span>
          </Link>
          {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">

              <li className="block py-2 px-5 text-gray-400 rounded  dark:text-white text-gray-100 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <Link
                  to="/"
                >
                  Dashboard
                </Link>
              </li>

              <li className="block py-2 px-5 text-gray-400 rounded dark:text-white text-gray-100 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <Link
                  to="/profile/"
                >
                 Profile
                </Link>
              </li>
            </ul>
          </div>    */}
          <ProfileBanner/>
        </div>
        
      </nav>
      <div >
      <Sidebar/>
      <Outlet />
      </div>
    
    </>

  )
}

export default Navigation