import React, { useState } from 'react'
import { useEffect } from 'react'
import { userData } from '../JSON-data/UserList'
import { SearchField } from '../Components/Common/InputField'
import { Button } from '../Components/Common/Button'
import { Link } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
const Users = () => {
    const [userList, setUserList] =useState([])

    useEffect(() => {
        document.title = 'Users List'
        setUserList([...userData])
    }, [])

    

    return (
        <div className='w-full'>
            <Heading heading = "User List"/>
            <div className='flex my-3.5'>
                <div className='flex-1 mb-2'>
                    <SearchField/>
                </div>
                <div className='flex-2 flex justify-end'>
                    <Button/>
                </div>
            </div>
            <div className="h-96 overflow-y-auto">
                <table className="w-full max-h-80 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full-Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email-ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Is-Admin
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((element)=>{ return <tr key={element.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4"><Link to={`${element.id}`}>{element.id}</Link></td>
                            <td className="px-6 py-4">{element.fullName}</td>
                            <td className="px-6 py-4">{element.email}</td>
                            <td className="px-6 py-4">{element.userName}</td>
                            <td className="px-6 py-4">{`${element.isAdmin}`}</td>
                        
                        </tr>})}
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users