import React from 'react'
import { useState } from 'react';
import AddButton from '../../../components/Buttons/AddButton';
import ExportButton from '../../../components/Buttons/ExportButton';
import TabButtons from '../../../components/Tabs/TabButtons';
import TabContent from '../../../components/Tabs/TabContent';
import Table from '../../../components/Table/Index'
import DeactivatedTable from '../../../components/Table/DeactivatedTable';
const Index = () => {
const [activeTab, setActiveTab] = useState("activeTab");

  return (
    <>
      <div className="flex flex-wrap items-center md:flex-nowrap md:justify-between">
        <div className="w-full mb-4 md:mb-0 md:w-2/3">
          <h1 className="mb-1 text-3xl font-medium">Customers</h1>
          <p className="text-gray500">All users of Bird worldwide</p>
        </div>
        <div className="w-full">
          <div className="flex md:justify-end">
            <div className="mr-4">
              <ExportButton />
            </div>
            <div>
              <AddButton />
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
        <div className="outlet">
          <TabContent id="activeTab" activeTab={activeTab}>
            <Table />
          </TabContent>
          <TabContent id="deactivatedTab" activeTab={activeTab}>
            <DeactivatedTable />
          </TabContent>
        </div>
      </div>
    </>
  );
}

export default Index