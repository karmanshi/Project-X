import React, { useEffect, useState } from 'react'
import Heading from '../Components/Common/Heading'
import { productData } from '../JSON-data/ProductData'
import { useNavigate } from 'react-router-dom'
const AddProducts = () => {
    let navigate = useNavigate()
    const [addProduct, setAddProduct] = useState({})
    const [updatedProduct, setUpdatedProduct] = useState([])

    const handleChange = (e) => {
        setAddProduct({ ...addProduct, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUpdatedProduct([...updatedProduct])
        localStorage.setItem('ProductList', JSON.stringify([...updatedProduct, addProduct]))
        navigate('/products/')
    }

    useEffect(()=>{
        let product_data = JSON.parse(localStorage.getItem('ProductList')) || []
        setUpdatedProduct([...product_data])
    },[updatedProduct])


    return (
        <>
            <div >
                <Heading heading="Add Products" />
                <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">
                    <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">

                        <div className="grid max-w-2xl">

                            <div className=" text-[#202142]">
                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="id"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Product Id
                                        </label>
                                        <input
                                            value={addProduct.id}
                                            type="text"
                                            name='id'
                                            id="id"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Product Id"
                                            onChange={handleChange}

                                        />
                                    </div>

                                </div>

                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="productName"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Product Name
                                        </label>
                                        <input
                                            value={addProduct.productName}
                                            type="text"
                                            name='productName'
                                            id="productName"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Product Name"
                                            onChange={handleChange}

                                        />
                                    </div>

                                </div>

                                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                    <div className="w-full">
                                        <label
                                            htmlFor="category"
                                            className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                        >
                                            Category
                                        </label>
                                        <input
                                            value={addProduct.category}
                                            name='category'
                                            type="text"
                                            id="category"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Category"
                                            onChange={handleChange}
                                        />
                                    </div>

                                </div>
                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="price"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <div class="relative">

                                        <input
                                            name='price'
                                            type="text"
                                            id="price"
                                            className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
                                            placeholder="Price"
                                            value={addProduct.price}
                                            onChange={handleChange}

                                        />
                                    </div>

                                </div>

                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="quantity"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Quantity
                                    </label>
                                    <div class="relative">

                                        <input
                                            name='quantity'
                                            type="text"
                                            id="quantity"
                                            className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "

                                            placeholder="Quantity"
                                            value={addProduct.quantity}
                                            onChange={handleChange}

                                        />
                                    </div>

                                </div>

                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="soldItems"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Sold-Items
                                    </label>
                                    <div class="relative">

                                        <input
                                            name='soldItems'
                                            type="text"
                                            id="soldItems"
                                            className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            placeholder="Items"
                                            value={addProduct.soldItems}
                                            onChange={handleChange}

                                        />
                                    </div>

                                </div>

                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Description
                                    </label>
                                    <textarea

                                        rows="4"
                                        cols="5"
                                        name="description"
                                        id="description"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        value={addProduct.description}
                                        onChange={handleChange}
                                        placeholder='Description'

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

export default AddProducts