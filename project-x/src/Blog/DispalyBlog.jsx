import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { SearchField } from '../Components/Common/InputField'
import { Button } from '../Components/Common/Button'
import { Link } from 'react-router-dom'
import Heading from '../Components/Common/Heading'

const DispalyBlog = () => {
  const [displayBlog, setDisplayBlog] = useState([])
  const [filterBlog, setFilterBlog] = useState([])
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('Blog')) || []
    setDisplayBlog(data)
    setFilterBlog(data)

  }, [])

  const handleSearch = (e) => {
    let val = e.target.value
    if (val == '') {
      setFilterBlog(displayBlog); return
    }
    const filterData = displayBlog.filter((ele) => {
      if (ele.heading.toLowerCase().includes(val.toLowerCase())) {
        return ele
      }
    })
    setFilterBlog(filterData)

  }

  const handleDelete = (id) => {
    const deleteData = displayBlog.filter((item, index) => {
      if (index != id) {
        return item
      }
    })
    setDisplayBlog([...deleteData])
    toast.success("Blog deleted successful");
    localStorage.setItem('Blog', JSON.stringify([...deleteData]))
  }

  return (
    <>

      <div className='w-full'>
        <Heading heading="Blogs" />
        <div className='flex my-3.5'>
          <div className='flex-1 mb-2'>
            <SearchField onChange={handleSearch} searchValue="Search Products......" />
          </div>
          <div className='flex-2 flex justify-end'>
            <Link to="/addBlog/">
              <Button ButtonText="Add Blogs" />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>  {filterBlog.map((element, index) => {
          return <div className="bg-zinc-300 flex flex-col w-full max-h-64 min-h-64 p-6 bg-gray-100 hover:bg-gray-50	 max-w-md mx-auto rounded-lg hover:shadow-md hover:scale-110 " key={index + 1}>
            <h1 className='text-2xl'>{element.heading}</h1>
            <p className="flex-grow text-gray-600">{element.content}
            </p>
            <button type="button" className=" text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-2 px-2  text-center w-24 dark:bg-red-400 dark:hover:bg-red-400 dark:focus:ring-red-900  mt-auto" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        })}</div>


      </div>

    </>
  )
}

export default DispalyBlog