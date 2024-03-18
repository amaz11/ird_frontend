'use client'

import { BarContext } from '@/app/context/BarControl';
import React, { useContext } from 'react'
import { HiOutlineLanguage } from "react-icons/hi2";
const Settingbar = () => {
    const { settingBar, setSettingBar } = useContext(BarContext)
    return (
        <div className='xl:col-span-2'>
            <div className={`bg-white z-40 w-64 fixed top-0 right-0 h-full ${settingBar ? "transition-all duration-500" : "-mr-64"} xl:w-full xl:static xl:rounded-3xl xl:h-[80vh]`}>
                <div className="text-center text-black text-[20px] py-8">
                    Settings
                </div>
                <div className="px-4 space-y-4">
                    <div className="flex gap-4 items-center p-2 bg-[#F7F8FA] rounded-lg">
                        <div className="bg-[#e8f0f5] p-2 rounded-full">
                            <HiOutlineLanguage size={16} />
                        </div>
                        <span className="text-sm text-[#868686]">Language Settings</span>
                    </div>
                    <div className="flex gap-4 items-center p-2 bg-[#F7F8FA] rounded-lg">
                        <div className="bg-[#e8f0f5] p-2 rounded-full">
                            <HiOutlineLanguage size={16} />
                        </div>
                        <span className="text-sm text-[#868686]">Language Settings</span>
                    </div>
                    <div className="flex gap-4 items-center p-2 bg-[#F7F8FA] rounded-lg">
                        <div className="bg-[#e8f0f5] p-2 rounded-full">
                            <HiOutlineLanguage size={16} />
                        </div>
                        <span className="text-sm text-[#868686]">Language Settings</span>
                    </div>
                    <div className="flex gap-4 items-center p-2 bg-[#F7F8FA] rounded-lg">
                        <div className="bg-[#e8f0f5] p-2 rounded-full">
                            <HiOutlineLanguage size={16} />
                        </div>
                        <span className="text-sm text-[#868686]">Language Settings</span>
                    </div>
                </div>
            </div>
            {settingBar ? <div className='bg-black opacity-20 fixed top-0 left-0 w-full h-full z-20' onClick={() => setSettingBar(!settingBar)}></div> : null}
        </div>
    )
}

export default Settingbar