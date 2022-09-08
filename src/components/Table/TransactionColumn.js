import { NavLink } from "react-router-dom";

export const Columns = [
  {
    id: 1,
    name: "Customer Name ",
    cell: (row) => (
      <div className="flex">
        <span className="font-semibold">{`${row.firstName} ${row.lastName}`}</span>{" "}
      </div>
    ),

    sortable: true,
    reorder: true,
  },

  {
    id: 2,
    name: "Phone Number",
    selector: (row) => row.phone,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Email Address",
    selector: (row) => row.email,
    sortable: true,
    // right: true,
    reorder: true,
  },
  {
    id: 4,
    name: "Transaction Type",
    selector: (row) => (
      <span className="capitalize">{row.transaction_type}</span>
    ),
    sortable: true,
    center: true,
    reorder: true,
  },

  {
    id: 5,
    name: "Destination Account",
    selector: (row) => row.dest_acct,
    sortable: true,
    center: true,
    reorder: true,
  },
  {
    id: 6,
    name: "Destination Name",
    selector: (row) => row.dest_name,
    sortable: true,
    center: true,
    reorder: true,
  },
  {
    id: 7,
    name: "Status",
    selector: (row) =>(
      row.status === "successful" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#ECFDF3] text-[#027A48] font-medium flex items-center">
            <span>{row.status}</span>
          </span>
        </div>
      ) : row.status ===  "processing" ? (
          <div className="py-1">
            <span className="px-3 py-1 my-2 rounded-full capitalize bg-blue-200 text-blue-900 font-medium flex items-center">
              <span>{row.status}</span>
            </span>
          </div>
        )
       :(
          <div className="py-1">
            <span className="px-3 py-1 my-2 rounded-full capitalize bg-red-200 text-red-900 font-medium flex items-center">
              <span>{row.status}</span>
            </span>
          </div>
       )
    ),
    sortable: true,
    // right: true,
    reorder: true,
  },
  {
    id: 8,
    name: " ",
    button: true,
    selector: (row) => (
      <NavLink
        to={`/transaction/${row.id}`}
        className="btn font-sm font-medium view-btn"
        rel="noopener noreferrer"
      >
        View
      </NavLink>
    ),
    center: true,
    reorder: true,
  },
];
