import React, { useState } from 'react'
import { useEffect } from 'react'
import { SearchField } from '../Components/Common/InputField'
import { Button } from '../Components/Common/Button'
import { Link } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import DropDown from '../Components/Common/DropDown'
import { toast } from 'react-toastify'
const Users = () => {
    const [userList, setUserList] = useState([])
    const [filterList, setFilterList] = useState([])

    const handleSearch =(e)=>{
        let searchVal = e.target.value
        if (searchVal === "") { setFilterList(userList); return; }
        const filterBySearch = userList.filter((item) => {
            if (item.fullName.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setFilterList([...filterBySearch]);
    }

    const handleDelete =(id)=>{
        const copyData = userList.filter((item) => {
            if (item.id != id) {
                return item
            }
        })
        setFilterList([...copyData])
        setUserList([...copyData])
        toast.success("User deleted successful");
        localStorage.setItem('UserList', JSON.stringify([...copyData]))
    }
    
    useEffect(() => {
        document.title = 'Users List'
        let user_data = JSON.parse(localStorage.getItem("UserList"))||[]
        setUserList([...user_data]) 
        setFilterList([...user_data])
    }, [])



    return (
        <div className='w-full'>
            <Heading heading="User List" />
            <div className='flex my-3.5'>
                <div className='flex-1 mb-2'>
                    <SearchField onChange={handleSearch} searchValue="Search......." />
                </div>
                <div className='flex-2 flex justify-end'>
                  <Link to="/users/add">
                  <Button ButtonText="Add User"/>
                  </Link>  
                </div>
            </div>
            <div className="h-96 overflow-y-auto">
                <table className="w-full max-h-80 text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 ">
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
                            <th scope="col" className="px-6 py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterList.map((element) => {
                            return <tr key={element.id} className="odd:bg-white  even:bg-gray-50  border-b ">
                                <td className="px-6 py-4"><Link to={`${element.id}`}>{element.id}</Link></td>
                                <td className="px-6 py-4">{element.fullName}</td>
                                <td className="px-6 py-4">{element.email}</td>
                                <td className="px-6 py-4">{element.userName}</td>
                                <td className="px-6 py-4">{`${element.isAdmin}`}</td>
                                <td className="px-6 py-4"><DropDown id={`Action_${element.id}`} handleDelete = {()=>{handleDelete(element.id)}}/></td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users