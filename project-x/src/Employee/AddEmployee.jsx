import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import { toast } from 'react-toastify'

const AddEmployee = () => {
    let navigate = useNavigate()
    const [employeData, setEmployeData] = useState({})
    const [updatedEmp, setUpdatedEmp] = useState([])

    const handleChange = (e) => {
        setEmployeData({ ...employeData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUpdatedEmp([...updatedEmp])
        localStorage.setItem('EmployeeList', JSON.stringify([...updatedEmp, employeData]))
        navigate('/employee/')
        toast.success("Employee Added");
    }

    useEffect(() => {
        document.title = 'Add-Employee'
        let emp_data = JSON.parse(localStorage.getItem('EmployeeList')) || []
        setUpdatedEmp([...emp_data])
    }, [])
    return (
        <div >
            <Heading heading="Add Employee" />
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">
                <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">
                    <div className="grid max-w-2xl">
                        <div className=" text-[#202142]">
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="emp_Id"
                                        className="block mb-2 text-sm font-medium text-indigo-900 "
                                    >
                                        Employee Id
                                    </label>
                                    <input
                                        value={employeData.id}
                                        type="text"
                                        name='emp_Id'
                                        id="emp_Id"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Employee Id"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="emp_Name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 "
                                    >
                                        Employee Name
                                    </label>
                                    <input
                                        value={employeData.emp_Name}
                                        type="text"
                                        name='emp_Name'
                                        id="emp_Name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Employee Name"
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="emp_email"
                                        className="block mb-2 text-sm font-medium text-indigo-900 "
                                    >
                                        Email-Id
                                    </label>
                                    <input
                                        value={employeData.emp_email}
                                        name='emp_email'
                                        type="email"
                                        id="emp_email"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Email-Id"
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="emp_Number"
                                    className="block mb-2 text-sm font-medium text-indigo-900 "
                                >
                                    Phone Number
                                </label>
                                <div class="relative">
                                    <input
                                        name='emp_Number'
                                        type="text"
                                        id="emp_Number"
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
                                        placeholder="Phone Number"
                                        value={employeData.emp_Number}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="emp_jobTitle"
                                    className="block mb-2 text-sm font-medium text-indigo-900"
                                >
                                    Job-Title
                                </label>
                                <div class="relative">
                                    <input
                                        name='emp_jobTitle'
                                        type="text"
                                        id="emp_jobTitle"
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                                        placeholder="Job-Title"
                                        value={employeData.emp_jobTitle}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddEmployee