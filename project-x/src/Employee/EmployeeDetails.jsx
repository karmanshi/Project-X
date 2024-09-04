import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import { toast } from 'react-toastify'

const EmployeeDetails = () => {
    let navigate = useNavigate()
    const { employeeId } = useParams()
    const [employee, setEmployee] = useState({})

    const handleUpdate = (e) => {
        e.preventDefault()
        let update_emp = JSON.parse(localStorage.getItem('EmployeeList'))
        update_emp = update_emp.map((ele) => {
            if (employeeId != ele.emp_Id) {
                return ele
            }
            else {
                return employee
            }
        })
        localStorage.setItem('EmployeeList', JSON.stringify(update_emp))
        toast.success("Employee Detail Updated");
        navigate('/employee/')
    }

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })

    }


    useEffect(() => {
        Document.title = "Employee-Details"
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
                                        className="block mb-2 text-sm font-medium text-indigo-900 "
                                    >
                                        Employee Name
                                    </label>
                                    <input
                                        value={employee.emp_Name}
                                        type="text"
                                        name='emp_Name'
                                        id="emp_Name"
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Employee Name"
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
                                        value={employee.emp_email}
                                        name='emp_email'
                                        type="email"
                                        id="emp_email"
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Email-Id"
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
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
                                        placeholder="Phone Number"
                                        value={employee.emp_Number}
                                    />
                                </div>

                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="emp_jobTitle"
                                    className="block mb-2 text-sm font-medium text-indigo-900 "
                                >
                                    Job-Title
                                </label>
                                <div class="relative">
                                    <input
                                        type="text"
                                        name='emp_jobTitle'
                                        id="emp_jobTitle"
                                        onChange={handleChange}
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                                        placeholder="Job-Title"
                                        value={employee.emp_jobTitle}
                                    />
                                </div>

                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleUpdate}
                                    type="button"
                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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

export default EmployeeDetails