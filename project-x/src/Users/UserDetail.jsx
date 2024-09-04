import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import { toast } from 'react-toastify'

const UserDetail = () => {
    let navigate = useNavigate()
    const { usersId } = useParams()
    const [users, setUsers] = useState({})

    const handleUpdate = (e) => {
        e.preventDefault()
        let update_user = JSON.parse(localStorage.getItem('UserList'))
        update_user = update_user.map((ele) => {
            if (usersId != ele.id) {
                return ele
            }
            else {
                return users
            }
        })
        localStorage.setItem('UserList', JSON.stringify(update_user))
        navigate('/users/')
        toast.success('Author Updated')
    }

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })

    }

    useEffect(() => {
        document.title = 'Users Details'
        const savedData = JSON.parse(localStorage.getItem('UserList')) || []
        savedData.map((ele) => {
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
                                        htmlFor="fullName"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your full name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name='fullName'
                                        value={users.fullName}
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Your first name"
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
                                        type="email"
                                        name='email'
                                        id="email"
                                        value={users.email}
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ps-10 p-2.5 "
                                        placeholder="your.email@mail.com"
                                        required=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="userName"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Your User Name
                                    </label>
                                    <input
                                        type="text"
                                        name='userName'
                                        id="userName"
                                        value={users.userName}
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Your first name"

                                    />
                                </div>

                            </div>
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="isAdmin"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Is Admin
                                    </label>
                                    <input
                                        type="text"
                                        name='isAdmin'
                                        id="isAdmin"
                                        value={users.isAdmin}
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Admin"

                                    />
                                </div>

                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="gender"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                >
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    id="gender"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    value={users.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="mobileNumber"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                >
                                    Mobile Number
                                </label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                        </svg>
                                    </div>
                                    <input
                                        name='phone_number'
                                        type="text"
                                        id="phone-input"
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ps-10 p-2.5  "
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        placeholder="1234567890"
                                        value={users.phone_number}

                                    />
                                </div>

                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="lastActive"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                >
                                    Last Active
                                </label>
                                <input
                                    type="date"
                                    name="lastActive"
                                    id="lastActive"
                                    onChange={handleChange}
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    value={users.lastActive}

                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleUpdate}
                                    type="button"
                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                >
                                    Update
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default UserDetail