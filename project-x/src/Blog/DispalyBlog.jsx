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

  }, [displayBlog])

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
            <SearchField onChange={handleSearch} searchValue="Search Blogs......" />
          </div>
          <div className='flex-2 flex justify-end'>
            <Link to="/blog/add">
              <Button ButtonText="Add Blogs" />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>  {filterBlog.map((element, index) => {
          return <div className="bg-zinc-300 flex flex-col w-full max-h-96 min-h-96 p-6 bg-zinc-200	 hover:bg-gray-50	 max-w-md mx-auto rounded-lg hover:shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  hover:scale-110 " key={index + 1}>
            <img className='w-full h-32' src= {element.img}/>
            <h1 className='mt-2 text-2xl'>{element.heading}</h1>
            <p className="flex-grow text-gray-600 py-2 text-left  ">{element.content.substring(0, 100)}....
            </p>
            <div className='flex mt-auto gap-4'>
              <div className='flex-1'>
                <button type="button" className=" text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm py-2 px-2  text-center w-24 " onClick={() => handleDelete(index)}>Delete</button>
              </div>

              <div className='flex-1 flex justify-end'>
                <Link to={`/blog/${index}`}>
                <button type="button" className=" text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2 px-2  text-center w-24 " >Read</button></Link>
              </div>
            </div>

          </div>
        })}</div>


      </div>

    </>
  )
}

export default DispalyBlog