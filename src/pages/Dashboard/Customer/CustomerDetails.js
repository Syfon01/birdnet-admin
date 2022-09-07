import React from 'react'
import AddButton
 from '../../../components/Buttons/AddButton';
import BackIcon from '../../../img/icons/arrow-back.svg';
import Avatar from '../../../img/Avatar2.png';
import Dot from "../../../img/icons/Dot-gray.svg";
import minusIcon from "../../../img/icons/minus-circle.svg";
import locationIcon from "../../../img/icons/globe-02.svg";
import phoneIcon from "../../../img/icons/phone.svg";
import mailIcon from "../../../img/icons/mail.svg";
import verifyIcon from "../../../img/icons/verify.svg";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import customers from "../../../components/data/customer";

const CustomerDetails = () => {

  const [data, setData] = useState([]);
  const { id } = useParams();

  
  const getData = () => {
    fetch(customers)
      .then(function (response) {
        console.log(response)
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
      <div className="flex">
        <img src={BackIcon} alt="back" srcset="" />
        <p className="text-[#667085] ml-6 font-medium">Customer</p>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={Avatar} alt="avatar" className="w-16" srcset="" />
          </div>
          <div>
            <p className="mb-0 text-3xl font-bold">Bolanle Adewale</p>
            <div className="flex items-center">
              <p>KYC</p>
              <span className="px-4 py-0.5 my-0.5 ml-2 rounded-full bg-[#F2F4F7] text-[#344054] font-medium flex items-center">
                <img src={Dot} className="mr-1 mt-0.5" alt="dot" />
                <span>Level 3</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <AddButton title={"Deactivate Customer"} />
        </div>
      </div>

      <div className="p-4 mt-8 bg-white md:p-6">
        <div className="flex gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <p className="text-sm font-bold uppercase text-[#4A5C6B]">
              DOCUMENTATION
            </p>

            <div className="bg-[#F9FAFB] p-4 rounded-lg mt-6">
              <div className="flex">
                <div>
                  <img src={minusIcon} alt="icon" srcset="" className="mt-1" />
                </div>
                <div className="ml-6 ">
                  <p className="text-lg font-medius">Address</p>
                  <div className="address text-[#667085] mt-3">
                    <p>14, Bourdillon street, Ikoyi, Lagos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F9FAFB] p-4 rounded-lg mt-6">
              <div className="flex">
                <div>
                  <img src={minusIcon} alt="icon" srcset="" className="mt-1" />
                </div>
                <div className="ml-6 ">
                  <p className="text-lg font-medius">Virtual Card Status</p>
                  <div className="mt-3 adress">
                    <div className="flex">
                      <p className="mr-8 font-bold card-number">**** 3456</p>
                      <div className="flex">
                        <p className="mr-6 text-[#667085]">Deactivated</p>
                        <p className="text-[#667085]">June 13, 2022</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 adress">
                    <div className="flex">
                      <p className="mr-8 font-bold card-number">**** 3456</p>
                      <div className="flex">
                        <p className="mr-6 text-[#667085]">Active</p>
                        <p className="text-[#667085]">
                          June 13, 2022{" "}
                          <span className="text-[#18853c] ml-2 font-sm font-medium">
                            Deactivate
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-2">
              <img src={locationIcon} alt="" srcset="" />
              <p className="font-medium text-[#344054] ml-3">Nigeria</p>
            </div>
            <div className="flex items-center mb-2">
              <img src={phoneIcon} alt="" srcset="" />
              <p className="font-medium text-[#344054] ml-3 flex">
                +234 806 223 1342
                <span className="px-4 py-0.5 ml-2 rounded-full bg-[#F0F9FF] text-[#026AA2] font-medium flex items-center">
                  <img src={verifyIcon} className="mr-1.5 mt-0.5" alt="dot" />
                  <span>Verified</span>
                </span>
              </p>
            </div>
            <div className="flex items-center mb-2">
              <img src={mailIcon} alt="" srcset="" />
              <p className="font-medium text-[#344054] ml-3 flex">
                bolanlesayeh@gmail.com
                <span className="px-4 py-0.5 ml-2 rounded-full bg-[#F0F9FF] text-[#026AA2] font-medium flex items-center">
                  <img src={verifyIcon} className="mr-1.5 mt-0.5" alt="dot" />
                  <span>Verified</span>
                </span>
              </p>
            </div>

            <hr className="mt-6" />
            <div className="mt-6">
              <div className="flex flex-wrap justify-between mb-2">
                <p className="text-[#4A5C6B] text-sm">Current balance:</p>
                <p className="text-lg font-bold">₦119,791</p>
              </div>
              <div className="flex flex-wrap justify-between mb-2">
                <p className="text-[#4A5C6B] text-sm">
                  Total value & count of transactions:
                </p>
                <p className="text-lg font-bold">₦359,993 (34)</p>
              </div>
              <div className="flex flex-wrap justify-between mb-2">
                <p className="text-[#4A5C6B] text-sm">
                  Total value & count of debit:
                </p>
                <p className="text-lg font-bold">₦120,101 (24)</p>
              </div>
              <div className="flex flex-wrap justify-between mb-2">
                <p className="text-[#4A5C6B] text-sm">
                  Total value & count of credit:
                </p>
                <p className="text-lg font-bold">₦239,892 (10)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails