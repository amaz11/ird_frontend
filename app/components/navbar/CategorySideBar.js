'use client'
import { BarContext } from '@/app/context/BarControl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import CategoryLoading from '../skeletonLoading/CategoryLoading';

const CategorySideBar = () => {
    const { categoryBar, setCategoryBar } = useContext(BarContext)
    const [activeCategory, setActiveCategory] = useState()
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')

    const router = useRouter()
    const getCategory = async () => {
        try {
            setIsLoading(true)
            const resCat = await fetch(`https://ird-task-backend-d911.onrender.com/category`)
            const resSubCat = await fetch(`https://ird-task-backend-d911.onrender.com/sub_category`)

            const dataCat = await resCat.json()
            const dataSubCat = await resSubCat.json()

            setCategory(dataCat)
            setSubCategory(dataSubCat)
            setActiveCategory(dataCat[0].id)
            router.push(`/?cat_id=${dataCat[0].cat_id}`)
        } catch (error) {
            alert(error)
        } finally {
            setIsLoading(false)

        }

    }

    const serchCategory = () => {

    }

    const setCategoryID = (id) => {
        router.push(`?cat_id=${id}`)
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <div className='col-span-4 xl:col-span-3'>
            <div className={`bg-white fixed top-0 left-0 z-40 w-64 sm:w-72 md:w-80 ${categoryBar ? "transition-all duration-500" : "-ml-64 sm:-ml-72 md:-ml-80"} lg:ml-0 lg:w-full lg:rounded-3xl  lg:h-[75vh]  xl:h-[80vh] overflow-hidden lg:relative`}>
                <div className="text-center bg-[#1FA45B] text-white py-4 lg:rounded-t-3xl">
                    Categories
                </div>
                <div className="flex px-4 py-3 relative">
                    <div className="absolute top-4 rounded-lg  py-2 px-4">
                        <IoIosSearch size={24} />
                    </div>
                    <input type="text" className="focus:outline-green-500 rounded-lg py-3 px-4 pl-12 w-full border border-gray-300 text-base bg-white shadow-sm" placeholder="Search by Dua Name" />
                </div>

                {/* category items */}
                <div className="px-4 space-y-1 pb-48 h-[100vh] lg:h-full overflow-y-scroll">

                    {isLoading ? Array(10).fill(1).map((i, j) => <CategoryLoading key={j} />) : category?.map((item, j) => <div key={item.id} className="">
                        {/* header  */}
                        <div onClick={() => { setActiveCategory(item.id); setCategoryID(item.cat_id) }} className={`flex items-center justify-between p-4 rounded-xl hover:bg-[#E8F0F5] ${activeCategory === item.id ? "bg-[#E8F0F5]" : ""} group cursor-pointer`}>
                            <div className="flex items-center gap-4">
                                <div className="bg-[#CFE0E5]  p-3 rounded-xl">
                                    <Image src='https://duaruqyah.com/assets/icon/duar_gurutto.svg' width='40' height='40' alt='dualogo' />
                                </div>
                                <div>
                                    <span className="text-black font-medium">{item.cat_name_en}</span>
                                    <br />
                                    <span className="text-[#7E7E7E] text-xs">Subcategory: {item.no_of_subcat}</span>
                                </div>
                            </div>

                            <div className="border-l group-hover:border-l-0 pl-4 text-center">
                                <span>{item.no_of_dua}</span><br />
                                <span className="text-[#7E7E7E] text-xs">
                                    Duas
                                </span>
                            </div>
                        </div>
                        { }
                        {/* subcategory */}
                        {activeCategory === item.id ? <div className="border-l-2 border-l-[#1FA45B] border-dotted ml-12 pt-3 space-y-4 pb-2 ">
                            {subCategory.map((subCatItem) => {
                                if (subCatItem.cat_id === item.cat_id) {
                                    return (
                                        <div key={subCatItem.id} className="before:inline-block before:w-2.5 before:h-2.5 before:p-0.5 before:rounded-full before:bg-[#1FA45B] before:mt-2 before:-ml-1.5 flex items-start">
                                            <p className="pl-4 text-sm" >{subCatItem.subcat_name_en}</p>
                                        </div>
                                    )
                                }
                                else {
                                    return
                                }
                            }
                            )} </div> : null}

                    </div>)
                    }

                    <div className="bg-white py-8 w-full absolute left-0 bottom-0">

                    </div>
                </div>
            </div>
            {categoryBar ? <div className='bg-black opacity-20 fixed top-0 left-0 w-full h-full z-20'
                onClick={() => setCategoryBar(!categoryBar)}
            ></div> : null}

        </div>
    )
}

export default CategorySideBar
