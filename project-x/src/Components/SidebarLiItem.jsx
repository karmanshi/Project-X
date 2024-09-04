import React from 'react'
import {  NavLink } from 'react-router-dom'
import {data} from '../JSON-data/SidebarData'

const SidebarLiItem = () => {
    return (
        <>
          
              {data.map((ele)=>{return  <li>
                    <NavLink
                        to={ele.to}
                        className= {({ isActive }) =>
                            isActive
                              ? "flex items-center p-2 text-white bg-blue-500 rounded-lg dark:bg-blue-700 dark:text-white group"
                              : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                          }
                          
                    >
                         {ele.iconName()} 
                        
                        <span className="ms-3">{ele.name}</span>
                    </NavLink>
                </li>})}

  
        </>
    )
}

export default SidebarLiItem
