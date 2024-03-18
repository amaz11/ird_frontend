'use client'
import { BarContext } from '@/app/context/BarControl';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const CategorySideBar = () => {
    const { categoryBar, setCategoryBar } = useContext(BarContext)
    const [activeCategory, setActiveCategory] = useState()
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
                    {
                        Array(8).fill(1).map((i, j) => <div key={j} className="">
                            {/* header  */}
                            <div onClick={() => setActiveCategory(j)} className={`flex items-center justify-between p-4 rounded-xl hover:bg-[#E8F0F5] ${activeCategory === j ? "bg-[#E8F0F5]" : ""} group`}>
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#CFE0E5]  p-3 rounded-xl">
                                        <Image src='https://duaruqyah.com/assets/icon/duar_gurutto.svg' width='40' height='40' />
                                    </div>
                                    <div>
                                        <span className="text-black font-medium">name</span>
                                        <br />
                                        <span className="text-[#7E7E7E] text-xs">subcat</span>
                                    </div>
                                </div>

                                <div className="border-l group-hover:border-l-0 pl-4 text-center">
                                    <span>21</span><br />
                                    <span className="text-[#7E7E7E] text-xs">
                                        Duas
                                    </span>
                                </div>
                            </div>
                            {/* subcategory */}
                            {activeCategory === j ? <div className="border-l-2 border-l-[#1FA45B] border-dotted ml-12 pt-3 space-y-4 pb-2 ">
                                <div className="before:inline-block before:w-3.5 before:h-2.5 before:p-0.5 before:rounded-full before:bg-[#1FA45B] before:mt-2 before:-ml-1.5 flex items-start">
                                    <p className="pl-4 text-sm" >The servant is dependent on his  Lord #1Lord #1Lord #1Lord #1</p>
                                </div>
                                <div className="before:inline-block before:w-3.5 before:h-2.5 before:p-0.5 before:rounded-full before:bg-[#1FA45B] before:mt-2 before:-ml-1.5 flex items-start">
                                    <p className="pl-4 text-sm" >The servant is dependent on his  Lord #1Lord #1Lord #1Lord #1</p>
                                </div>
                                <div className="before:inline-block before:w-3.5 before:h-2.5 before:p-0.5 before:rounded-full before:bg-[#1FA45B] before:mt-2 before:-ml-1.5 flex items-start">
                                    <p className="pl-4 text-sm" >The servant is dependent on his  Lord #1Lord #1Lord #1Lord #1</p>
                                </div>
                                <div className="before:inline-block before:w-3.5 before:h-2.5 before:p-0.5 before:rounded-full before:bg-[#1FA45B] before:mt-2 before:-ml-1.5 flex items-start ">
                                    <p className="pl-4 text-sm" >Shelter from horror, misery, evil consequences and rejoicing of the enemy</p>
                                </div>
                            </div> : null}

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