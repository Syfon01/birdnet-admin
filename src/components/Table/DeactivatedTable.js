import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import deactive from "./deactive";
import SortIcon from "../../img/icons/arrow-up.svg";
import SearchTable from "./SearchTable";
import DatePicker from "./DatePicker";
import { Columns } from "./Columns.js";
import ExportBtn from "../Buttons/ExportButton";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
    },
  },
};

const Index = () => {
  const [data, setData] = useState(deactive);
  const [searchVal, setSearchVal] = useState("");

  const search = (rows) => {
    return rows.filter(
      (row) =>
        row.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1 ||
        row.lastName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
    );
  };

  function downloadCSV(tableArray) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(tableArray);
    if (csv == null) return;

    const filename = "customer.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  function convertArrayOfObjectsToCSV(myArray) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(myArray[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    myArray.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  const actionsMemo = useMemo(
    () => (
      <ExportBtn
        onExport={() => {
          const formattedData = data.map((item) => {
            return {
              id: item.id,
              firstName: item.firstName,
              lastName: item.lastName,
              email: item.email,
              phone: item.phone,
              country: item.country,
              transaction_count: item.transaction_count,
              lasat_activity: item.last_activity,
              kyc: item.kyc,
            };
          });
          downloadCSV(formattedData);
        }}
      />
    ),
    [data]
  );

  return (
    <>
      <div className="py-4">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <div className="w-full md:w-[35%]">
            <SearchTable
              SearchTable={(e) => setSearchVal(e.target.value)}
              filteredText={searchVal}
            />
          </div>
          <div className="flex items-center">
            <div className="mr-3">
              <DatePicker />
            </div>
            {/* <p>Filter</p> */}
          </div>
        </div>
      </div>

      <div className="outlet pt-4">
        <DataTable
          className="border"
          responsive
          striped
          highlightOnHover
          title="Deactivated Customers"
          actions={actionsMemo}
          columns={Columns}
          data={search(deactive)}
          defaultSortFieldId={1}
          sortIcon={<img src={SortIcon} />}
          pagination
          selectableRows
          customStyles={customStyles}
        />
      </div>
    </> 
  );
};

export default Index;
