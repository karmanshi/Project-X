import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'

const EmployeeDetails = () => {
    const { employeeId } = useParams()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        Document.title = "Employee Details"
        const save_emp = JSON.parse(localStorage.getItem('EmployeeList')) || []
        save_emp.map((ele) => {
            if (employeeId == ele.emp_Id) {
                setEmployee({ ...ele })
                return ele
            }
        })
    }, [])

    return (
        <div >
            <Heading heading={`Employee List : ${employeeId}`} />
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">
                <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">

                    <div className="grid max-w-2xl">

                        <div className=" text-[#202142]">
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="emp_Name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Employee Name
                                    </label>
                                    <input
                                        value={employee.emp_Name}
                                        type="text"
                                        name='emp_Name'
                                        id="emp_Name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Employee Name"

                                    />
                                </div>

                            </div>

                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="emp_email"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Email-Id
                                    </label>
                                    <input
                                        value={employee.emp_email}
                                        name='emp_email'
                                        type="email"
                                        id="emp_email"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Email-Id"

                                        required=""
                                    />
                                </div>

                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="emp_Number"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
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
                                        value={employee.emp_Number}

                                    />
                                </div>

                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="emp_joobTitle"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                >
                                    Job-Title
                                </label>
                                <div class="relative">

                                    <input
                                        name='emp_joobTitle'
                                        type="text"
                                        id="emp_joobTitle"
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "

                                        placeholder="Job-Title"
                                        value={employee.emp_jobTitle}

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

export default EmployeeDetails