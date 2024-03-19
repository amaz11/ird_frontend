import React from 'react'

const CategoryLoading = () => {
    return (
        <div className={`flex items-center justify-between p-4 rounded-xl bg-[#E8F0F5] `}>
            <div className="flex items-center gap-4">
                <div className="bg-[#CFE0E5]  p-3 rounded-xl w-10 h-10">
                </div>
                <div>
                    <div className="text-black font-medium w-32 rounded-full h-3 bg-[#CFE0E5] mb-1"></div>
                    <div className="text-black font-medium w-20 rounded-full h-3 bg-[#CFE0E5]"></div>

                </div>
            </div>

            <div className=" pl-4 text-center">
                <div className="text-black font-medium w-12 rounded-full h-3 bg-[#CFE0E5] mb-1"></div>
                <div className="text-black font-medium w-10 rounded-full h-3 bg-[#CFE0E5]"></div>

            </div>
        </div>
    )
}

export default CategoryLoading