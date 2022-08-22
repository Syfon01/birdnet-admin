import Dot from "../../img/icons/dot.svg";

export const Columns = [
  {
    id: 1,
    name: "First, Last Name ",
    cell: (row) => (
      <div className="flex items-center">
        <div className="mr-1.5">
          <img
            height="30px"
            width="30px"
            alt={row.firstName}
            src={`${row.img}`}
          />
        </div>

        <div>
          <span className="font-semibold">{`${row.firstName} ${row.lastName}`}</span>{" "}
          <br />
          <span className="">{`${row.country}`}</span>
        </div>
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
    name: "Transaction Count",
    selector: (row) => row.transaction_count,
    sortable: true,
    center: true,
    reorder: true,
  },
  {
    id: 5,
    name: "Last Activity",
    selector: (row) => row.last_activity,
    sortable: true,
    // right: true,
    reorder: true,
  },
  {
    id: 6,
    name: "KYC Level",
    selector: (row) => (
      <div className="py-1">
        <span className="px-3 py-1 my-2 rounded-full bg-[#ECFDF3] text-[#027A48] font-medium flex items-center">
          <img src={Dot} className="mr-1 mt-0.5" alt="dot" />
          <span>{row.kyc}</span>
        </span>
      </div>
    ),
    sortable: true,
    center: true,
    reorder: true,
  },
];
