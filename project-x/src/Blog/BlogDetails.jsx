import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'
import { Button } from '../Components/Common/Button'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
  const { blogId } = useParams()
  const [blogDetails, setBlogDetails] = useState({})


  useEffect(() => {
    document.title=`Blog : ${blogId}`
    let data = JSON.parse(localStorage.getItem('Blog')) || []
    data.map((element, index) => {
      if (blogId == index) {
        setBlogDetails({ ...element })
        return element
      }
    })
  }, [])
  return (
    <>
      <div className=' '>
        <Heading heading={`Blog : ${blogId}`} />

        <div className=' mt-5 bg-gray-100 border border-gray-100  p-4 h-full'>
          <div className='text-black text-5xl font-bold text-left '>{blogDetails.heading}</div>
          <div className='mt-2  text-sm font-semibold'>{blogDetails.time}</div>
          <img className='mt-5 mb-4  w-full h-96' src={blogDetails.img} />
          <div className='my-5 '> 
            <pre className='w-full text-gray-700 text-justify tracking-wide text-lg text-wrap'>{blogDetails.content}</pre></div>
          <div className='flex-2 flex justify-end'>
            <Link to={`/blog/updated/${blogId}`}>
              <Button ButtonText="Update Blogs" />
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default BlogDetails