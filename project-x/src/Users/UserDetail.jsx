import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import { userData } from '../JSON-data/UserList'

const UserDetail = () => {
  const { usersId } = useParams()
  const [users, setUsers] = useState({})


  useEffect(() => {
    document.title = 'Users Details'
    userData.map((ele) => {
      if (usersId == ele.id) {
        setUsers({ ...ele })
        return ele
      }

    })
  }, [])



  return (
    <div >
      <Heading heading={`User List : ${usersId}`} />
         <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">   
                    <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">
                       
                        <div className="grid max-w-2xl">
                            
                            <div className=" text-[#202142]">
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Your full name
                                        </label>
                                        <input
                                            value={users.fullName}

                                            type="text"
                                            id="first_name"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Your first name"
                                            defaultValue="Jane"
                                            required=""
                                        />
                                    </div>

                                </div>
                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                            </svg>
                                        </div>
                                        <input
                                            value={users.email}

                                            type="email"
                                            id="email"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ps-10 p-2.5 "
                                            placeholder="your.email@mail.com"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Your User Name
                                        </label>
                                        <input
                                            value={users.userName}

                                            type="text"
                                            id="first_name"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Your first name"
                                            defaultValue="Jane"
                                            required=""
                                        />
                                    </div>

                                </div>
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Is Admin
                                        </label>
                                        <input
                                            value={users.isAdmin}

                                            type="text"
                                            id="first_name"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Your first name"
                                            defaultValue="Jane"
                                            required=""
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                
            </main>
    


    </div>
  )
}

export default UserDetail