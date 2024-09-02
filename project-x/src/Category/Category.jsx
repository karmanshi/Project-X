import React, { useEffect, useState } from 'react'
import Heading from '../Components/Common/Heading'
import { Button } from '../Components/Common/Button'
import { SearchField } from '../Components/Common/InputField'
import { Link } from 'react-router-dom'
const Category = () => {
    const [category,setCategory] = useState([])
    const [filterCategory,setFilterCategory] = useState([])

    useEffect(()=>{
        let category_data = JSON.parse(localStorage.getItem('CategoryList')) || []
        setCategory([...category_data])
        setFilterCategory([...category_data])
    },[])


    const handleSearch = (e) =>{
        let searchVal = e.target.value
        if(searchVal == ''){
            setFilterCategory(category);
            return;
        }
        const filterSearch = category.filter((item)=>{
            if(item.categoryName.toLowerCase().includes(searchVal.toLowerCase())){
                return item
            }
           
        })
        setFilterCategory(filterSearch)
    }
  return (
   <>
    <div className='w-full'>
            <Heading heading="Category List" />
            <div className='flex my-3.5'>
                <div className='flex-1 mb-2'>
                    <SearchField onChange={handleSearch}  searchValue="Search Products......" />
                </div>
                <div className='flex-2 flex justify-end'>
                    <Link to="/category/add">
                        <Button ButtonText="Add Category" />
                    </Link>
                </div>
            </div>
            <div className="h-96 overflow-y-auto">
                <table className="w-full max-h-80 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product-Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category-Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created-on
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {filterCategory.map((element) => {
                            return <tr key={element.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4"><Link to={`${element.id}`}>{element.id}</Link></td>
                                <td className="px-6 py-4">{element.name}</td>
                                <td className="px-6 py-4">{element.categoryName}</td>
                                <td className="px-6 py-4">{element.createdOn}</td>
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