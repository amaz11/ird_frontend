
import Settingbar from "./components/setting/settingbar";
import Topbar from "./components/navbar/Topbar";
import Sidebar from "./components/navbar/Sidebar";
import CategoryBar from "./components/navbar/CategoryBar";
import CategorySideBar from "./components/navbar/CategorySideBar";
import Dua from "./components/dua/Dua";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home({ searchParams }) {
  // console.log(searchParams);
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

          <Suspense fallback={<Loading />}>
            <Dua catId={searchParams.cat_id || 1} />
          </Suspense>

          {/* setting  */}
          <Settingbar />
        </div>
      </div>
    </main>
  );
}
