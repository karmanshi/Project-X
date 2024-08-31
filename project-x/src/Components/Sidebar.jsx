import React from 'react'
import SidebarLiItem from './SidebarLiItem'

const Sidebar = () => {
    return (
        <>
            <div className='m-0 w-80 h-full bg-red-500'>
                <aside 
                className="fixed   left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar">
                    <div className="h-full bg-gray-200 px-3 py-4 overflow-y-auto ">
                    <ul className="space-y-2 font-medium">
                        <SidebarLiItem/>
                        </ul>
                    </div>

                </aside>
            </div>
        </>
    )
}

export default Sidebar
