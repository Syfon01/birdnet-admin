import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AddButton from "../../../components/Buttons/AddButton";
import TabButtons from "../../../components/Tabs/TabButtons";
import TabContent from "../../../components/Tabs/TabContent";
import Table from "../../../components/Table/Index";
import DeactivatedTable from "../../../components/Table/DeactivatedTable";
const Index = ({ open }) => {
  const [activeTab, setActiveTab] = useState("activeTab");
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="flex flex-wrap items-center md:flex-nowrap md:justify-between">
        <div className="w-full mb-4 md:mb-0 md:w-2/3">
          <h1 className="mb-1 text-3xl font-medium">Transactions</h1>
          <p className="text-gray500">All Transaction on Bird Platform</p>
        </div>
        <div className="w-full">
          <div className="flex md:justify-end">
            <div>
              <AddButton title={"Create Transaction"} open={showModal} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 Tables">
        <Table />
        
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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                  <div>
                    <div className="mt-2 sm:mt-2">
                      <Dialog.Title
                        as="h3"
                        className="text-xl leading-6 font-semibold text-gray-900"
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
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
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
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
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
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
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
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
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
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm"
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
                                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm text-gray-600"
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
                                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary500 focus:border-primary500 sm:text-sm text-gray-600"
                              >
                                <option>1st level</option>
                                <option>2nd level</option>
                                <option>3rd level</option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-7 sm:mt-10 mb-4 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                            <button
                              type="button"
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pri sm:col-start-2 sm:text-sm"
                              onClick={() => setOpenModal(false)}
                            >
                              Proceed
                            </button>
                            <button
                              type="button"
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100  sm:mt-0 sm:col-start-1 sm:text-sm"
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
};

export default Index;
