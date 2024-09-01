import React, { useState,useEffect } from 'react'
import Heading from '../Components/Common/Heading'
import { Link } from 'react-router-dom'
import { Button } from '../Components/Common/Button'
import { SearchField } from '../Components/Common/InputField'
import { productData } from '../JSON-data/ProductData'


const Products = () => {
    const [products,setProducts]= useState([])
    const [filterProduct,setFilterProduct] = useState([])

    useEffect(() => {
        setProducts([...productData])
        setFilterProduct([...productData])
    }, [])

    const handleSearch = (e) =>{
        let searchVal = e.target.value
        if(searchVal == ''){
            setFilterProduct(products); return;
        }
        const filterSearch = products.filter((item)=>{
            if(item.productName.toLowerCase().includes(searchVal.toLowerCase())){
                return item
            }
        })
        setFilterProduct(filterSearch)
    }
    

    


    return (
        <div className='w-full'>
            <Heading heading="Product List" />
            <div className='flex my-3.5'>
                <div className='flex-1 mb-2'>
                    <SearchField onChange={handleSearch} searchValue="Search Products......" />
                </div>
                <div className='flex-2 flex justify-end'>
                    <Link to="/product/add">
                        <Button ButtonText="Add Product" />
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
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {filterProduct.map((element) => {
                            return <tr key={element.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4"><Link to={`${element.id}`}>{element.id}</Link></td>
                                <td className="px-6 py-4">{element.productName}</td>
                                <td className="px-6 py-4">{element.price}</td>
                                <td className="px-6 py-4">{element.quantity}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products