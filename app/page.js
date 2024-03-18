import Image from "next/image";

// sidebar
import logo from "../public/dua-logo.svg";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { RiMedicineBottleLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";

// Navbar
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import profile from "../public/profile.svg"

// settings
import { HiOutlineLanguage } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="flex gap-6 min-h-screen  bg-[#F7F8FA] p-10 pb-0 ">
      {/* sidebar  */}
      <div className="fixed w-full  bottom-0 left-0 z-10 md:static md:pb-10 md:w-auto shadow-sm">
        <div className="flex flex-row md:flex-col items-center justify-center md:justify-between md:h-full bg-white text-black w-full md:w-[100px] p-4 rounded-3xl rounded-b-none md:rounded-b-3xl ">
          <div className="hidden md:block">
            <Image src={logo} />
          </div>
          <ul className="flex flex-row justify-between gap-6 w-full items-center md:flex-col">
            <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><FiHome size={24} className="text-[#898A8A] font-medium" /></li>
            <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><MdOutlineDashboard size={24} className="text-[#898A8A] font-medium" /></li>
            <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><IoBulbOutline size={24} className="text-[#898A8A] font-medium" /></li>
            <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><IoBookmarkOutline size={24} className="text-[#898A8A] font-medium" /></li>
            <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105"><RiMedicineBottleLine size={24} className="text-[#898A8A] font-medium" /></li>
            <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105 hidden md:block"><IoChatbubbleOutline size={24} className="text-[#898A8A] font-medium" /></li>
            <li className="bg-[#e8f0f5] p-2 rounded-full hover:scale-105 hidden md:block"><IoBookOutline size={24} className="text-[#898A8A] font-medium" /></li>

          </ul>
          <div className="hidden md:block bg-green-500 p-4 rounded-lg">
            <FaHandHoldingHeart size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="w-full text-black  overflow-y-hidden">
        <nav className="w-full grid gap-6 grid-cols-12 items-center">
          <h4 className="font-semibold col-span-2 text-[24px]">Dua Page</h4>
          <div className="col-span-8 flex justify-end pr-4 relative">
            <input type="text" className="focus:outline-green-500 rounded-lg w-[40%] py-3 px-4 text-base bg-white shadow-sm" placeholder="Search by Dua Name" />
            <div className="absolute top-1 rounded-lg right-[18px] py-2 px-4 bg-[#F3F4F6]">
              <IoIosSearch size={24} />
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 col-span-2">
            <Image src={profile} />
            <MdOutlineArrowDropDown size={24} className="text-[#868686]" />
          </div>
        </nav>
        <div className="grid grid-cols-12 mt-6 gap-6 overflow-hidden">
          {/* category  */}
          <div className="bg-white rounded-3xl col-span-3  h-[80vh] overflow-hidden relative">
            <div className="text-center bg-[#1FA45B] text-white py-4 rounded-t-3xl">
              Categories
            </div>
            <div className="flex px-4 py-3 relative">
              <div className="absolute top-4 rounded-lg  py-2 px-4">
                <IoIosSearch size={24} />
              </div>
              <input type="text" className="focus:outline-green-500 rounded-lg py-3 px-4 pl-12 w-full border border-gray-300 text-base bg-white shadow-sm" placeholder="Search by Dua Name" />
            </div>

            {/* category items */}
            <div className="px-4 space-y-4 pb-48 h-full overflow-y-scroll">
              {
                Array(8).fill(1).map((i, j) => <div key={j} className="">
                  {/* header  */}
                  <div className="flex items-center justify-between p-4 rounded-xl hover:bg-[#E8F0F5] group">
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
                  <div className="border-l-2 border-l-[#1FA45B] border-dotted ml-12 space-y-4 pb-2 ">
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
                  </div>
                </div>)
              }

              <div className="bg-white py-8 w-full absolute left-0 bottom-0">

              </div>
            </div>
          </div>

          {/* duas  */}
          <div className="col-span-7 bg-orange-500 h-[88vh] overflow-y-scroll">
            2
          </div>

          {/* setting  */}
          <div className="bg-white rounded-3xl h-[80vh] col-span-2">
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
        </div>
      </div>
    </main>
  );
}
