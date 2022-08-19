import React from 'react'
import PlusIcon from '../../img/icons/plus.svg'
const AddButton = () => {
  return (
    <button className="flex items-center px-3 py-1.5 text-white rounded-[50px] bg-primary500 text-sm">
      <img src={PlusIcon} className="mr-2" alt="export" srcset="" />
      Add Customer
    </button>
  );
}

export default AddButton