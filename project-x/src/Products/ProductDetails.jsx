import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'

const ProductDetails = () => {
    const { productId } = useParams()
    const [products, setProducts] = useState({})

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
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Product Name
                                    </label>
                                    <input
                                        value={products.productName}
                                        type="text"
                                        name='productName'
                                        id="productName"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Product Name"

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
                                        value={products.category}
                                        name='category'
                                        type="text"
                                        id="category"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Category"

                                        required=""
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
                                        value={products.price}

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
                                        value={products.quantity}

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
                                        value={products.soldItems}

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
                                    value={products.description}
                                    placeholder='Description'

                                />
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default ProductDetails