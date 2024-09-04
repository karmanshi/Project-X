import React, { useEffect, useState } from 'react'
import Heading from '../Components/Common/Heading'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCategory = () => {
    let navigate = useNavigate()
    const [addCategory, setAddCategory] = useState({})
    const [updatedCategory, setUpdatedCategory] = useState([])

    const handleChange = (e) => {
        setAddCategory({ ...addCategory, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUpdatedCategory([...updatedCategory])
        localStorage.setItem('CategoryList', JSON.stringify([...updatedCategory, addCategory]))
        navigate('/category/')
        toast.success('Category Added sucessfully')
    }

    useEffect(() => {
        document.title = 'Add-Category'
        let categoryData = JSON.parse(localStorage.getItem('CategoryList')) || []
        setUpdatedCategory([...categoryData])
    }, [])

    return (
        <>
            <div >
                <Heading heading="Add Category" />
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">
                    <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">
                        <div className="grid max-w-2xl">
                            <div className=" text-[#202142]">
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="id"
                                            className="block mb-2 text-sm font-medium text-indigo-900 "
                                        >
                                            Id
                                        </label>
                                        <input
                                            value={addCategory.id}
                                            type="text"
                                            name='id'
                                            id="id"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Category-Id"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="categoryName"
                                            className="block mb-2 text-sm font-medium text-indigo-900"
                                        >
                                            Category-Name
                                        </label>
                                        <input
                                            value={addCategory.category}
                                            name='categoryName'
                                            type="text"
                                            id="categoryName"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Category-Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="createdOn"
                                        className="block mb-2 text-sm font-medium text-indigo-900"
                                    >
                                        Created-On
                                    </label>
                                    <div class="relative">
                                        <input
                                            name='createdOn'
                                            type="date"
                                            id="createdOn"
                                            className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
                                            placeholder="Created-On"
                                            value={addCategory.createdOn}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
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

export default AddCategory