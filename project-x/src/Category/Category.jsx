import React, { useEffect, useState } from 'react'
import Heading from '../Components/Common/Heading'
import { Button } from '../Components/Common/Button'
import { SearchField } from '../Components/Common/InputField'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import DropDown from '../Components/Common/DropDown'
const Category = () => {
    let navigate = useNavigate()
    const [category, setCategory] = useState([])
    const [filterCategory, setFilterCategory] = useState([])

    const handleSearch = (e) => {
        let searchVal = e.target.value
        if (searchVal == '') {
            setFilterCategory(category);
            return;
        }
        const filterSearch = category.filter((item) => {
            if (item.categoryName.toLowerCase().includes(searchVal.toLowerCase())) {
                return item
            }
        })
        setFilterCategory(filterSearch)
    }

    const handleEmpDelete = (id) => {
        const deleteData = category.filter((item) => {
            if (item.id != id) {
                return item
            }
        })
        setFilterCategory([...deleteData])
        setCategory([...deleteData])
        toast.success("Category deleted successful");
        localStorage.setItem('CategoryList', JSON.stringify([...deleteData]))
    }

    useEffect(() => {
        document.title = 'Category-List'
        let category_data = JSON.parse(localStorage.getItem('CategoryList')) || []
        setCategory([...category_data])
        setFilterCategory([...category_data])
    }, [])

    return (
        <>
            <div className='w-full'>
                <Heading heading="Category List" />
                <div className='flex my-3.5'>
                    <div className='flex-1 mb-2'>
                        <SearchField onChange={handleSearch} searchValue="Search Products......" />
                    </div>
                    <div className='flex-2 flex justify-end'>
                        <Link to="/category/add">
                            <Button ButtonText="Add Category" />
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
                                    Category-Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Created-on
                                </th>
                                <th scope="col" className="px-6 py-3">

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {filterCategory.map((element) => {
                                return <tr key={element.id} className="odd:bg-white even:bg-gray-50 border-b">
                                    <td className="px-6 py-4"><Link to={`${element.id}`}>{element.id}</Link></td>
                                    <td className="px-6 py-4">{element.categoryName}</td>
                                    <td className="px-6 py-4">{element.createdOn}</td>
                                    <td className="px-6 py-4" ><DropDown id={`Action_${element.id}`} handleDelete={() => { handleEmpDelete(element.id) }} /></td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Category