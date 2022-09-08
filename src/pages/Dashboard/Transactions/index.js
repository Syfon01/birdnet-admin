import React from "react";
import { useState } from "react";
import transactions from "../../../components/data/transaction";
import { Columns } from "../../../components/Table/TransactionColumn";
import Table from "../../../components/Table/Index";
const Index = () => {
  const [data, setData] = useState(transactions);
  // const [openModal, setOpenModal] = useState(false);

  // const showModal = () => {
  //   setOpenModal(true);
  // };

  // const cancelButtonRef = useRef(null);

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
              {/* <AddButton title={"Create Transaction"} open={showModal} /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 Tables">
        <Table
          data={data}
          columns={Columns}
          title="Transactions"
          searchPlaceholder="Search Transactions"
        />
      </div>
    </>
  );
};

export default Index;
