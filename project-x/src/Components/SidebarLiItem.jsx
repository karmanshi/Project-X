import React from 'react'
import { Link } from 'react-router-dom'
import {data} from './SidebarData'

const SidebarLiItem = () => {
    return (
        <>
          
              {data.map((ele)=>{return  <li>
                    <Link
                        to="/"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                         {ele.iconName()}
                        
                        <span className="ms-3">{ele.name}</span>
                    </Link>
                </li>})}

  
        </>
    )
}

export default SidebarLiItem
