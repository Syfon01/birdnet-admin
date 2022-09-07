import React from 'react'
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddButton from '../../../components/Buttons/AddButton';
import PlusIcon from "../../../img/icons/plus.svg";
import TabButtons from '../../../components/Tabs/TabButtons';
import TabContent from '../../../components/Tabs/TabContent';
import Table from '../../../components/Table/Index'
import customers from "../../../components/data/customer";
import inactiveCustomer from "../../../components/data/deactive";
import {Columns} from "../../../components/Table/CustomerColumn";

const Index = () => {
const [data, setData] = useState(customers);
const [inActiveData, setInActiveData] = useState(inactiveCustomer);
const [activeTab, setActiveTab] = useState("activeTab");
const [openModal, setOpenModal] = useState(false)

const showModal = () =>{
  setOpenModal(true)
}

const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="flex flex-wrap items-center md:flex-nowrap md:justify-between">
        <div className="w-full mb-4 md:mb-0 md:w-2/3">
          <h1 className="mb-1 text-3xl font-medium">Customers</h1>
          <p className="text-gray500">All users of Bird worldwide</p>
        </div>
        <div className="w-full">
          <div className="flex md:justify-end">
            <div>
              <AddButton icon={PlusIcon} title={"Add Customer"} open={showModal} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 Tables">
        <div className="mb-4 border-b border-gray-200">
          <ul className="flex">
            <TabButtons
              name="Active"
              id="activeTab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButtons
              name="Deactivated"
              id="deactivatedTab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </div>
        <div className="">
          <TabContent id="activeTab" activeTab={activeTab}>
            <Table
              data={data}
              columns={Columns}
              title="Active Customers"
              searchPlaceholder="Search customers"
            />
          </TabContent>
          <TabContent id="deactivatedTab" activeTab={activeTab}>
            <Table
              data={inActiveData}
              columns={Columns}
              title="Deactived Customers"
              searchPlaceholder="Search customers"
            />
          </TabContent>
        </div>
      </div>

      {/*==========================================================
 add customer modal 
 ======================================= */}
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="mt-2 sm:mt-2">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900"
                      >
                        Add Customer
                      </Dialog.Title>
                      <div className="mt-6">
                        <form action="" method="post">
                          <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Email address
                              </label>
                              <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Transaction Count
                              </label>
                              <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Country
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full px-3 py-2 mt-1 text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                              >
                                <option>NG</option>
                                <option>US</option>
                              </select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700"
                              >
                                KYC Level
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full px-3 py-2 mt-1 text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
                              >
                                <option>1st level</option>
                                <option>2nd level</option>
                                <option>3rd level</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-4 mt-7 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                            <button
                              type="button"
                              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pri sm:col-start-2 sm:text-sm"
                              onClick={() => setOpenModal(false)}
                            >
                              Proceed
                            </button>
                            <button
                              type="button"
                              className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 sm:mt-0 sm:col-start-1 sm:text-sm"
                              onClick={() => setOpenModal(false)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Index
