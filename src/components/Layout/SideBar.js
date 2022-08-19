import { Fragment, useState } from "react";
import {  NavLink } from "react-router-dom";
import logo from "../../img/logo-white.svg";

import { Dialog, Transition } from "@headlessui/react";
import {
  XIcon,
} from "@heroicons/react/outline";
import HomeIcon from "../../img/icons/home.svg";
import CustomerIcon from "../../img/icons/customers.svg";
import ReportIcon from "../../img/icons/report.svg";
import TransactionIcon from "../../img/icons/transaction.svg";
import AccountIcon from "../../img/icons/account.svg";
import RefundIcon from "../../img/icons/refunds.svg";
import DeviceIcon from "../../img/icons/devices.svg";
import BalanceIcon from "../../img/icons/currency.svg";
import UserIcon from "../../img/icons/user.svg";
import SettingIcon from "../../img/icons/settings.svg";
import LogoutIcon from "../../img/icons/log-out.svg";

const navigation = [
  { name: "Home", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "Customer", href: "/customer", icon: CustomerIcon, current: false },
  {
    name: "Transactions",
    href: "/transactions",
    icon: TransactionIcon,
    current: false,
  },
  { name: "Accounts", href: "/accounts", icon: AccountIcon, current: false },
  { name: "Refunds", href: "/refunds", icon: RefundIcon, current: false },
  { name: "Devices", href: "/devices", icon: DeviceIcon, current: false },
  { name: "Balance", href: "/balance", icon: BalanceIcon, current: false },
  { name: "User Management", href: "/user-management", icon: UserIcon, current: false },
  { name: "Reports", href: "/reports", icon: ReportIcon, current: false },
];

const SideBar = ({click, close}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

   const signOut = () => {
     sessionStorage.clear();
     window.location.href = "/login";
   };

  return (
    <>
      {/* sidebar for mobile  */}
      <Transition.Root show={click} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-[#101828]">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={close}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex items-center flex-shrink-0 px-4">
                  <img className="w-20 h-8" src={logo} alt="Bird" />
                </div>
                <div className="flex-1 h-0 mt-5 overflow-y-auto">
                  <nav className="px-2 mt-4 space-y-2">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive ? "navbar-link active" : "navbar-link"
                        }
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="flex-shrink-0 w-6 h-6 mr-4 text-white"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <div className="flex-shrink-0 p-4">
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      isActive ? "navbar-link active" : "navbar-link py-3"
                    }
                  >
                    <img
                      src={SettingIcon}
                      alt="setting-icon"
                      className="flex-shrink-0 w-6 h-6 mr-4 text-white"
                      aria-hidden="true"
                    />
                    Settings
                  </NavLink>
                  <div className="flex-shrink-0 block py-3 mt-4 border-t border-gray-700 group">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="profile"
                        />
                      </div>
                      <div className="ml-3">
                        <a href="/profile">
                          <p className="text-sm font-medium text-white">
                            Biodun Gomes
                          </p>
                          <p className="text-sm font-medium text-[#F2F4F7] group-hover:text-gray-300">
                            b.gomes@birdnet.io
                          </p>
                        </a>
                      </div>
                      <div className="ml-auto">
                        <button className="" onClick={signOut}>
                          <img src={LogoutIcon} alt="logout-icon" srcSet="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>

      {/*======================================================
      sidebar for desktop
      ==================================================== */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-[#101828] overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-20 h-8" src={logo} alt="Workflow" />
          </div>
          <div className="flex flex-col flex-1 mt-5">
            <nav className="flex-1 px-2 pb-4 mt-4 space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "navbar-link active" : "navbar-link"
                  }
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="flex-shrink-0 w-6 h-6 mr-3"
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 p-4">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link py-3"
              }
            >
              <img
                src={SettingIcon}
                alt="setting-icon"
                className="flex-shrink-0 w-6 h-6 mr-4 text-white"
                aria-hidden="true"
              />
              Settings
            </NavLink>
            <div className="flex-shrink-0 block py-3 mt-4 border-t border-gray-700 group">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="profile"
                  />
                </div>
                <div className="ml-3">
                  <a href="/profile">
                    <p className="text-sm font-medium text-white">
                      Biodun Gomes
                    </p>
                    <p className="text-sm font-medium text-[#F2F4F7] group-hover:text-gray-300">
                      b.gomes@birdnet.io
                    </p>
                  </a>
                </div>
                <div className="ml-auto">
                  <button className="" onClick={signOut}>
                    <img src={LogoutIcon} alt="logout-icon" srcSet="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar