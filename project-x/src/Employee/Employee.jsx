import React, { useEffect, useState } from 'react'
import Heading from '../Components/Common/Heading'
import { SearchField } from '../Components/Common/InputField'
import { Button } from '../Components/Common/Button'
import { Link } from 'react-router-dom'
import DropDown from '../Components/Common/DropDown'
import { toast } from 'react-toastify';


const Employee = () => {
    const [empData, setEmpData] = useState([])
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        let save_empData = JSON.parse(localStorage.getItem('EmployeeList')) || []
        setEmpData([...save_empData])
        setFilterData([...save_empData])
    },[empData])

    const handleSearch = (e) => {
        let setVal = e.target.value
        if (setVal == '') {
            setFilterData(empData); return;
        }
        const filterSearch = empData.filter((item) => {
            if (item.emp_Name.toLowerCase().includes(setVal.toLowerCase())) {
                return item
            }

        })
        setFilterData(filterSearch)
        
    }

    const handleEmpDelete = (id) =>{
        const copyData = empData.filter((item) => {
            if (item.emp_Id != id) {
                return item
            }

        })
        setEmpData([...copyData])
        toast.success("Data deleted successful");
        localStorage.setItem('EmployeeList', JSON.stringify([...copyData]))
        
    }


    return (
        <>
            <div className='w-full'>
                <Heading heading="Employee List" />
                <div className='flex my-3.5'>
                    <div className='flex-1 mb-2'>
                        <SearchField onChange={handleSearch} searchValue="Search Employee......" />
                    </div>
                    <div className='flex-2 flex justify-end'>
                        <Link to="/employee/add">
                            <Button ButtonText="Add Employee" />
                        </Link>
                    </div>
                </div>
                <div className="h-96 overflow-y-auto">
                    <table className="w-full max-h-80 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Employee-Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Employee-Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email-Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone-Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job-Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            {filterData.map((element) => {
                                return <tr key={element.emp_Id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="px-6 py-4"><Link to={`${element.emp_Id}`}>{element.emp_Id}</Link></td>
                                    <td className="px-6 py-4">{element.emp_Name}</td>
                                    <td className="px-6 py-4">{element.emp_email}</td>
                                    <td className="px-6 py-4">{element.emp_Number}</td>
                                    <td className="px-6 py-4">{element.emp_jobTitle}</td>
                                    <td className="px-6 py-4" ><DropDown id= {`Action_${element.emp_Id}`} handleDelete={()=>{handleEmpDelete(element.emp_Id)}}/></td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Employee