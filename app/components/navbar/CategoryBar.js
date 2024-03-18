'use client'
import { BarContext } from '@/app/context/BarControl';
import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa6";

const CategoryBar = () => {
    const { categoryBar, setCategoryBar } = useContext(BarContext)

    return (
        <div onClick={() => setCategoryBar(!categoryBar)} className="mt-20 bg-white rounded-xl p-4 flex items-center gap-4 lg:hidden">
            <FaBars />
            <span className='text-sm'>Category</span>
        </div>
    )
}

export default CategoryBar