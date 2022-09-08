import React from "react";
import AddButton from "../../../components/Buttons/AddButton";
import BackIcon from "../../../img/icons/arrow-back.svg";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import customers from "../../../components/data/customer";

const DevicesDetails = () => {
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
      <Link to="/devices">
        <div className="flex">
          <img src={BackIcon} alt="back" srcset="" />
          <p className="text-[#667085] ml-6 font-medium">Devices</p>
        </div>
      </Link>

      <div className="flex justify-between mt-8">
        <div className="flex items-center">
          <div>
            <p className="mb-0 text-3xl font-bold">Daniel's Phone</p>
            <div className="flex items-center">
              <span className="px-4 py-0.5 my-0.5 rounded-full bg-[#F2F4F7] text-[#344054] font-medium flex items-center">
                <span>active</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <AddButton title={"Deactivate Device"} />
        </div>
      </div>

      <div className="p-4 mt-8 bg-white md:p-6">
        <p className="text-sm font-bold uppercase text-[#4A5C6B]">
          Device Details
        </p>

        <div className="flex gap-6 md:gap-8">
          <div className="w-full">
            <div className="bg-[#F9FAFB] p-4 rounded-lg mt-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="">
                  <p className="text-sm font-medius">Name</p>
                  <div className="address text-[#667085]">
                    <p>Basil Goodluck</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Phone Name</p>
                  <div className="address text-[#667085]">
                    <p>Daniel's Phone</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Email</p>
                  <div className="address text-[#667085]">
                    <p>Basil@gmail.com</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Phone Number</p>
                  <div className="address text-[#667085]">
                    <p>098084532</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Country</p>
                  <div className="address text-[#667085]">
                    <p>Nigeria</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Device Type</p>
                  <div className="address text-[#667085]">
                    <p>Android</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Date Joined</p>
                  <div className="address text-[#667085]">
                    <p>Sunday, 3rd January</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Blocked Status</p>
                  <div className="address text-[#667085]">
                    <p>True</p>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medius">Last Login</p>
                  <div className="address text-[#667085]">
                    <p>Sunday, 23rd June</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DevicesDetails;
