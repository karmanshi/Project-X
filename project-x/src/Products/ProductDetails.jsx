import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import { toast } from 'react-toastify'

const ProductDetails = () => {
    let navigate = useNavigate()
    const { productId } = useParams()
    const [products, setProducts] = useState({})

    const handleUpdate = (e)=>{
        e.preventDefault()
        let update_product = JSON.parse(localStorage.getItem('ProductList'))
        update_product =  update_product.map((ele) => {
            if (productId != ele.id) {
                return ele
            }
            else{
                return products
            }
        })
        localStorage.setItem('ProductList',JSON.stringify(update_product))
        navigate('/products/')
        toast.success('Product updated sucessfully')
    }

    const handlechange =(e)=>{
        setProducts({...products,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        document.title = 'Product Details'
        const save_product = JSON.parse(localStorage.getItem('ProductList')) || []
        save_product.map((ele) => {
            if (productId == ele.id) {
                setProducts({ ...ele })
                return ele
            }
        })
    }, [])
    
    return (
        <div >
            <Heading heading={`Product List : ${productId}`} />
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">
                <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">

                    <div className="grid max-w-2xl">

                        <div className=" text-[#202142]">
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="productName"
                                        className="block mb-2 text-sm font-medium text-indigo-900 "
                                    >
                                        Product Name
                                    </label>
                                    <input
                                        value={products.productName}
                                        type="text"
                                        name='productName'
                                        id="productName"
                                        onChange={handlechange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Product Name"

                                    />
                                </div>

                            </div>

                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-indigo-900"
                                    >
                                        Category
                                    </label>
                                    <input
                                        value={products.category}
                                        name='category'
                                        type="text"
                                        id="category"
                                        onChange={handlechange}
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Category"
                                    />
                                </div>

                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-indigo-900 "
                                >
                                    Price
                                </label>
                                <div class="relative">

                                    <input
                                        name='price'
                                        type="text"
                                        id="price"
                                        onChange={handlechange}
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
                                        placeholder="Price"
                                        value={products.price}

                                    />
                                </div>

                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="quantity"
                                    className="block mb-2 text-sm font-medium text-indigo-900"
                                >
                                    Quantity
                                </label>
                                <div class="relative">

                                    <input
                                        name='quantity'
                                        type="text"
                                        id="quantity"
                                        onChange={handlechange}
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                                        placeholder="Quantity"
                                        value={products.quantity}

                                    />
                                </div>

                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="soldItems"
                                    className="block mb-2 text-sm font-medium text-indigo-900 "
                                >
                                    Sold-Items
                                </label>
                                <div class="relative">

                                    <input
                                        name='soldItems'
                                        type="text"
                                        id="soldItems"
                                        onChange={handlechange}
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Items"
                                        value={products.soldItems}

                                    />
                                </div>

                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-indigo-900 "
                                >
                                    Description
                                </label>
                                <textarea

                                    rows="4"
                                    cols="5"
                                    name="description"
                                    id="description"
                                    onChange={handlechange}
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    value={products.description}
                                    placeholder='Description'

                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleUpdate}
                                    type="button"
                                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
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

export default ProductDetails