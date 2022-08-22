import React, {useState} from 'react'
import DataTable from "react-data-table-component";
import customers from "./customer";
import SortIcon from "../../img/icons/arrow-up.svg";
import SearchTable from './SearchTable';
import DatePicker from './DatePicker';
import { Columns } from './Columns.js'
 

const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
  }


const Index = () => {
  const [data, setData] = useState(customers)
  const [searchVal, setSearchVal] = useState("");

  const search = (rows) => {
    return rows.filter((row) => 
    row.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1 ||
    row.lastName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
    );
  }
// const FilteredItem = () => {  return  new FilteredItem (searchVal ? searchVal : null); }       

const subHeaderComponent = (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    <div className="w-full md:w-[35%]">
      <SearchTable SearchTable={(e) => setSearchVal(e.target.value)}  filteredText={searchVal}/>
    </div>
    <div className="flex items-center">
      <div className="mr-3">
        <DatePicker />
      </div>
      <p>Filter</p>
    </div>
  </div>
);



  return (
    <>
      <DataTable
        className="border"
        responsive
        striped
        highlightOnHover
        title="All customers"
        columns={Columns}
        data={search(data)}
        defaultSortFieldId={1}
        sortIcon={<img src={SortIcon} />}
        pagination
        selectableRows
        customStyles={customStyles}
        subHeader
			  subHeaderComponent={subHeaderComponent}
        subHeaderAlign="center"
      />
    </>
  );
}

export default Index