import React from 'react'
import Image from "next/image";
import duacard from "../../../public/duacard.svg"
import { IoCopyOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";
import getDua from '@/app/services/getDua';

const Dua = async ({ catId }) => {
    const duas = await getDua(catId);
    // console.log(duas);
    return (
        <div className="col-span-full lg:col-span-8 xl:col-span-7  h-[100vh] lg:h-[88vh] overflow-y-scroll">
            {/* <div className="bg-white py-4 px-5 rounded-xl mb-3 font-medium">
                <span className="text-[#4AB57B]">Section: </span>
                <span>The servant is dependent on his Lord</span>
            </div> */}
            {duas?.map((item, index) => {
                return (
                    <div className='mb-3' key={index}>
                        <div className="bg-white py-4 px-5 rounded-xl">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <Image src={duacard} alt="duacard" />
                                    <span className="text-[#4AB57B] font-medium">
                                        {item.dua_name_en}
                                    </span>
                                </div>
                                <p className="text-lg font-medium text-right">
                                    {item.dua_arabic}
                                </p>
                                <p className="text-lg font-medium">
                                    {item.translation_en ? item.translation_en : item.top_en}
                                </p>
                                <div>
                                    <span className="text-lg font-medium text-[#4AB57B]">Reference:</span><br />
                                    <span className="text-lg font-medium">{item.refference_en}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 justify-end text-[#7E7E7E] mt-10">
                                <IoCopyOutline size={20} />
                                <IoBookOutline size={20} />
                                <IoBulbOutline size={20} />
                                <IoShareSocialOutline size={20} />
                                <MdOutlineReport size={20} />

                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Dua