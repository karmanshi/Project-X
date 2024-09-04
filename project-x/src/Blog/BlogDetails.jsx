import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'

const BlogDetails = () => {
    const {blogId} = useParams()
    const [blogDetails,setBlogDetails]=useState({})
   
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('Blog'))||[]
        data.map((element,index)=>{
            if(blogId == index){
                setBlogDetails({...element})
                return element
            }
        })

    },[])
  return (
    <>
    <div className=' '>
    <Heading heading={`Blog : ${blogId}`} />

       <div className=' mt-5 bg-gray-100 border border-gray-100  p-4 h-full'>
        <div className='text-black text-5xl font-bold text-left '>{blogDetails.heading}</div>
        <div className='mt-2  text-sm'>{blogDetails.time}</div>
        <div className='my-5 text-gray-700 text-xl text-justify tracking-wide'>{blogDetails.content}</div>
       </div>

    </div>
    </>
  )
}

export default BlogDetails