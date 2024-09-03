import { useNavigate } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AddUser = () => {
    let navigate = useNavigate()
    const [addUser, setAddUser] = useState({})
    const [updateUser, setUpdateUser] = useState([])
    const handleChange = (e) => {
        setAddUser({ ...addUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let user_id = updateUser.length+1 
        let data = addUser
        data.id = user_id
        setUpdateUser([...updateUser, data])
        localStorage.setItem('UserList', JSON.stringify([...updateUser, addUser]))
        navigate('/users/')
        toast.success("User added successful");
                                         

    }

    useEffect(() => {
        let user_data = JSON.parse(localStorage.getItem('UserList')) || []
        setUpdateUser([...user_data])
    }, [updateUser])

    return (
        <>
            <div >
                <Heading heading="Add Users" />
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">
                    <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">

                        <div className="grid max-w-2xl">

                            <div className=" text-[#202142]">
                                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                                    <img
                                        className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Bordered avatar"
                                    />
                                    <div className="flex flex-col space-y-5 sm:ml-8">
                                        <button
                                            type="button"
                                            className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                        >
                                            Change picture
                                        </button>
                                        <button
                                            type="button"
                                            className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
                                        >
                                            Delete picture
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Your full name
                                        </label>
                                        <input
                                            value={addUser.fullName}
                                            onChange={handleChange}
                                            type="text"
                                            id="fullName"
                                            name="fullName"
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
                                            value={addUser.email}
                                            onChange={handleChange}
                                            type="email"
                                            name='email'
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
                                            htmlFor="username"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Your User Name
                                        </label>
                                        <input
                                            value={addUser.userName}
                                            onChange={handleChange}
                                            type="text"
                                            id="userName"
                                            name='userName'
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Enter username"

                                            required=""
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
                                        onChange={handleChange}
                                        id="gender"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                        value={addUser.gender}
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
                                            className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 ps-10 p-2.5  "
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            placeholder="1234567890"
                                            value={addUser.phone_number}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                    <label
                                        htmlFor="admin"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        IsAdmin
                                    </label>
                                    <select
                                        name="isAdmin"
                                        onChange={handleChange}
                                        id="isAdmin"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                        value={addUser.isAdmin}
                                    >
                                        <option value="">Select admin Status</option>
                                        <option value="false">False</option>
                                        <option value="true">True</option>
                                       
                                    </select>
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
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        value={addUser.lastActive}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    )
}

export default AddUser