import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Heading from '../Components/Common/Heading'


const UpdateBlog = () => {
    let navigate = useNavigate()
    const { blogId } = useParams()
    const [updatedBlog, setUpdatedBlog] = useState({})

    const handleChange = (e) => {
        setUpdatedBlog({ ...updatedBlog, [e.target.name]: e.target.value })

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
        let resp1 = checkValidation(updatedBlog.heading, "Blog Heading")
        let resp2 = checkValidation(updatedBlog.content, "Content")
        let dateTime = new Date();
        dateTime = dateTime.toDateString()
        if (resp1 && resp2 == true) {
            let data = { content: updatedBlog.content, heading: updatedBlog.heading, time: dateTime, img: updatedBlog.img }
            let update_blog = JSON.parse(localStorage.getItem('Blog'))
            let new_data = []
            for (let i = 0; i < update_blog.length; i++) {
                if (i != blogId) {
                    new_data.push(update_blog[i])
                }
                else {
                    new_data.push(data)
                }
            }
            localStorage.setItem('Blog', JSON.stringify([...new_data]))
            toast.success('Blog Updated sucessfully')
            navigate('/blog/list')
        }
    }

    useEffect(() => {
        document.title = 'Update Blog'
        let data = JSON.parse(localStorage.getItem('Blog')) || []
        data.map((element, index) => {
            if (blogId == index) {
                setUpdatedBlog({ ...element })
                return element
            }
        })
    }, [])

    return (
        <>
            <div >
                <Heading heading="Update Blog" />
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
                                            value={updatedBlog.heading}
                                            onChange={handleChange}

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
                                            value={updatedBlog.img}
                                            onChange={handleChange}

                                            className="bg-indigo-50 border border-indigo-300 text-black-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5  "
                                            placeholder="Image-url"
                                        />
                                    </div>
                                </div>

                                <div className="mb-2 sm:mb-6">
                                    <label
                                        htmlFor="content"
                                        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                                    >
                                        Content
                                    </label>
                                    <textarea
                                        name='content'
                                        id="content"
                                        rows={13}
                                        value={updatedBlog.content}
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
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UpdateBlog