import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import {  MenuAlt2Icon } from "@heroicons/react/outline";
import SideBar from "./SideBar";


const DashboardLayout = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClose = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <SideBar click={sidebarOpen} close={handleClose} />
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Header part  */}
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          
        </div>
        {/* end of header  */}

        <main>
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
