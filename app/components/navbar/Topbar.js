'use client'
import React, { useContext } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import profile from "../../../public/profile.svg"
import { GoGear } from "react-icons/go";
import Image from 'next/image';
import { BarContext } from '@/app/context/BarControl';

const Topbar = () => {
    const { settingBar, setSettingBar } = useContext(BarContext)

    return (
        <nav className="w-full grid gap-6 grid-cols-4 lg:grid-cols-12 items-center fixed mb-14 bg-white z-20 top-0 left-0 px-6 py-4 xl:px-0 xl:py-0 xl:static xl:mb-auto xl:bg-transparent">
            <h4 className="font-semibold col-span-2 text-[24px]">Dua Page</h4>
            <div className="hidden col-span-8 lg:flex justify-end pr-4 relative">
                <input type="text" className="focus:outline-green-500 rounded-lg w-[40%] py-3 px-4 text-base bg-white shadow-sm" placeholder="Search by Dua Name" />
                <div className="absolute top-1 rounded-lg right-[18px] py-2 px-4 bg-[#F3F4F6]">
                    <IoIosSearch size={24} />
                </div>
            </div>
            <div className="flex justify-end items-center gap-4 col-span-2">
                <div className="flex justify-end items-center gap-1 col-span-2">
                    <Image src={profile} alt='profile' />
                    <MdOutlineArrowDropDown size={24} className="text-[#868686]" />
                </div>
                <GoGear size={24} className="text-[#868686] cursor-pointer xl:hidden" onClick={() => setSettingBar(!settingBar)} />
            </div>

        </nav>
    )
}

export default Topbar