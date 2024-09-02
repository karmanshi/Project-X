import React, { useEffect, useState } from 'react'
import Heading from '../Components/Common/Heading';
import { useParams } from 'react-router-dom';
const CategoryDetails = () => {
    const {categoryId} = useParams()
    const [category,setCategory] = useState({})
    
    useEffect(()=>{
        document.title = "Category Details"
        let save_data = JSON.parse(localStorage.getItem('CategoryList'))||[]
        save_data.map((element)=>{
            if(categoryId == element.id){
                setCategory({...element})
                return element
            }
        })
    },[])
    

  return (
    <>
      <div >
            <Heading heading={`Category List : ${categoryId}`} />
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mt-3">
                <div className="w-full pb-8  sm:max-w-xl sm:rounded-lg">
                    <div className="grid max-w-2xl">
                        <div className=" text-[#202142]">
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Product Name
                                    </label>
                                    <input
                                        value={category.name}
                                        type="text"
                                        name='name'
                                        id="name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Product Name"
                                    />
                                </div>
                            </div>
                           
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label
                                        htmlFor="categoryName"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Category
                                    </label>
                                    <input
                                        value={category.categoryName}
                                        name='categoryName'
                                        type="text"
                                        id="categoryName"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Category Name"
                                        
                                        required=""
                                    />
                                </div>

                            </div>
                            <div className="mb-2 sm:mb-6">
                                <label
                                    htmlFor="createdOn"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                >
                                  Created-On
                                </label>
                                <div class="relative">
                                    
                                    <input
                                        name='createdOn'
                                        type="text"
                                        id="createdOn"
                                        className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5    "
                                        placeholder="Created On"
                                        value={category.createdOn}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    </>
  )
}

export default CategoryDetails