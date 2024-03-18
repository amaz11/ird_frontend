import Image from "next/image";
import duacard from "../public/duacard.svg"
import Settingbar from "./components/setting/settingbar";
import Topbar from "./components/navbar/Topbar";
import Sidebar from "./components/navbar/Sidebar";
import CategoryBar from "./components/navbar/CategoryBar";
import CategorySideBar from "./components/navbar/CategorySideBar";


// card

import { IoCopyOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex gap-6 min-h-screen  bg-[#F7F8FA] px-6 pt-6 lg:px-10 lg:pt-10">
      {/* sidebar  */}
      <Sidebar />

      <div className="w-full text-black  overflow-y-hidden">
        {/* Topbar  */}
        <Topbar />
        <CategoryBar />
        <div className="grid grid-cols-12 lg:mt-16 xl:mt-6 gap-6 overflow-hidden">
          {/* category section  */}
          <CategorySideBar />

          {/* duas  */}
          <div className="col-span-full lg:col-span-8 xl:col-span-7  h-[100vh] lg:h-[88vh] overflow-y-scroll">
            <div className="bg-white py-4 px-5 rounded-xl mb-3 font-medium">
              <span className="text-[#4AB57B]">Section: </span>
              <span>The servant is dependent on his Lord</span>
            </div>

            <div className="bg-white py-4 px-5 rounded-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Image src={duacard} alt="duacard" />
                  <span className="text-[#4AB57B] font-medium">
                    1. The servant is dependent on his Lord #1
                  </span>
                </div>

                <p className="text-lg font-medium">
                  All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.
                </p>

                <div>
                  <span className="text-lg font-medium text-[#4AB57B]">Reference:</span><br />
                  <span className="text-lg font-medium">Surah Al-Fatir 35:15</span>
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

          {/* setting  */}
          <Settingbar />
        </div>
      </div>
    </main>
  );
}
