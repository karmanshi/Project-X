import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Heading from '../Components/Common/Heading'
const AddBlog = () => {
  let navigate = useNavigate()
  const [addBlog, setAddBlog] = useState('')
  const [blogHeading, setBlogHeading] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const [updatedBlog, setUpdatedBlog] = useState([])

  const handleChange = (e) => {
    setAddBlog(e.target.value)
  }


  const checkValidation = (value, field) => {
    if (value == '') {
      toast.error(`${field} is required`)
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let resp1 = checkValidation(blogHeading, "Blog Heading")
    let resp2 = checkValidation(addBlog, "Content")
    let dateTime = new Date();
    dateTime = dateTime.toDateString()
    if (resp1 && resp2 == true) {
      let data = { content: addBlog, heading: blogHeading,time:dateTime,img:imageUrl  }
      localStorage.setItem('Blog', JSON.stringify([...updatedBlog, data]))
      toast.success('Blog Added sucessfully')
      navigate('/blog/list')
      setAddBlog('')
    }
  }

  useEffect(() => {
    document.title = 'Add-Blogs'
    const blog = localStorage.getItem('Blog');
    if (blog) {
      setUpdatedBlog([...JSON.parse(blog)]); // Parse the array
    }
  }, [])


  return (


    <div >
      <Heading heading="Write a Blogs" />
      <main className="w-full min-h-screen py-1 mt-3">
        <div className="w-full pb-8 ">

          <div className="grid ">

            <div className=" text-[#202142]">
           
              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="heading"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Heading
                </label>
                <div class="relative">

                  <input
                    type='text'
                    id='heading'
                    name='heading'
                    value={blogHeading}
                    onChange={(e) => { setBlogHeading(e.target.value) }}

                    className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                    placeholder="Heading"
                  />
                </div>

              </div>

              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="img"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Image-URL
                </label>
                <div class="relative">

                  <input
                  type='text'
                    id='img'
                    name='img'
                    value={imageUrl}
                    onChange={(e) => { setImageUrl(e.target.value) }}

                    className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                    placeholder="Image-url"
                  />
                </div>

              </div>


              <div className="mb-2 sm:mb-6">
                <label
                  htmlFor="editor"
                  className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                >
                  Content
                </label>
                <textarea
                  name='editor'
                  id="editor"
                  rows={13}
                  value={addBlog}
                  onChange={handleChange}
                  className=" bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                  placeholder='Write a Blog......'

                />
              </div>


            </div>
            <div className="flex justify-start">
              <button
                onClick={handleSubmit}
                type="button"
                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Publish
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>

  )
}

export default AddBlog