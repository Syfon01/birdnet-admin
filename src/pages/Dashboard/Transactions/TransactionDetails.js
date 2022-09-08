import React from "react";
import AddButton from "../../../components/Buttons/AddButton";
import BackIcon from "../../../img/icons/arrow-back.svg";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import customers from "../../../components/data/customer";

const TransactionDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getData = () => {
    fetch(customers)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        const newJson = myJson.find((data) => data.id === id);
        setData(newJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="py-4">
      <Link to="/transactions">
        <div className="flex">
          <img src={BackIcon} alt="back" srcset="" />
          <p className="text-[#667085] ml-6 font-medium">Transactions</p>
        </div>
      </Link>

      <div className="flex justify-between mt-8">
        <div className="flex items-center">
          <div>
            <p className="mb-0 text-3xl font-bold">Transaction #234</p>
            <div className="flex items-center">
              <span className="px-4 py-0.5 my-0.5 rounded-full bg-[#F2F4F7] text-[#344054] font-medium flex items-center">
                <span>Successful</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <AddButton title={"Download"} />
        </div>
      </div>

      <div className="p-4 mt-8 bg-white md:p-6">
        <p className="text-sm font-bold uppercase text-[#4A5C6B]">
          Transaction Breakdown
        </p>

        <div className="flex gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <div className="bg-[#F9FAFB] p-4 rounded-lg mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <p className="text-sm font-medius">Sender's Name</p>
                  <div className="address text-[#667085]">
                    <p>Basil Goodluck</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Sender's Email</p>
                  <div className="address text-[#667085]">
                    <p>Basil@gmail.com</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Sender's Phone</p>
                  <div className="address text-[#667085]">
                    <p>098084532</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Sender's Country</p>
                  <div className="address text-[#667085]">
                    <p>Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-lg mt-6">
              <div className="">
                <div className=" ">
                  <div className="">
                    <div className="flex flex-wrap justify-between mb-2">
                      <p className="text-[#4A5C6B] text-sm">Amount Sent:</p>
                      <p className="text-base font-medium">₦23119,791</p>
                    </div>
                    <div className="flex flex-wrap justify-between mb-2">
                      <p className="text-[#4A5C6B] text-sm">Charge Fee:</p>
                      <p className="text-base font-medium">₦359</p>
                    </div>

                    <div className="flex flex-wrap justify-between mb-2">
                      <p className="text-[#4A5C6B] text-sm">Transaction Type</p>
                      <p className="text-base font-medium">Debit</p>
                    </div>

                    <div className="flex flex-wrap justify-between mb-2">
                      <p className="text-[#4A5C6B] text-sm">Source Currency</p>
                      <p className="text-base font-medium">Naira</p>
                    </div>
                    <div className="flex flex-wrap justify-between mb-2">
                      <p className="text-[#4A5C6B] text-sm">Destination Currency</p>
                      <p className="text-base font-medium">Dollar</p>
                    </div>
                    <div className="mb-2">
                      <p className="text-[#4A5C6B] text-sm">
                        Description
                      </p>
                      <p className="text-base font-medium">A transfer for payment of staff</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#F9FAFB] p-4 rounded-lg mt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <p className="text-sm font-medius">Receiver's Name</p>
                  <div className="address text-[#667085]">
                    <p>Olumide Joto</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">
                    Receiver's Account Number
                  </p>
                  <div className="address text-[#667085]">
                    <p>34453344332</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Amount Received</p>
                  <div className="address text-[#667085]">
                    <p>$2345</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
