'use client'
import React from 'react'
import logo from "../../../public/dua-logo.svg";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiMedicineBottleLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className="fixed w-full  bottom-0 left-0 z-10 xl:static xl:pb-10 xl:w-auto shadow-sm">
            <div className="flex flex-row md:flex-col items-center justify-center xl:justify-between xl:h-full bg-white text-black w-full xl:w-[100px] p-4 rounded-3xl rounded-b-none xl:rounded-b-3xl ">
                <div className="hidden xl:block">
                    <Image src={logo} alt='logo' />
                </div>
                <ul className="flex flex-row justify-between gap-6 w-full items-center xl:flex-col">
                    <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><FiHome size={24} className="text-[#898A8A] font-medium" /></li>
                    <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><MdOutlineDashboard size={24} className="text-[#898A8A] font-medium" /></li>
                    <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><IoBulbOutline size={24} className="text-[#898A8A] font-medium" /></li>
                    <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><IoBookmarkOutline size={24} className="text-[#898A8A] font-medium" /></li>
                    <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><RiMedicineBottleLine size={24} className="text-[#898A8A] font-medium" /></li>
                    <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105 hidden xl:block"><IoChatbubbleOutline size={24} className="text-[#898A8A] font-medium" /></li>
                    <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105 hidden xl:block"><IoBookOutline size={24} className="text-[#898A8A] font-medium" /></li>

                </ul>
                <div className="hidden xl:block bg-green-500 p-4 rounded-lg">
                    <FaHandHoldingHeart size={24} className="text-white" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar