import React from 'react'
import PlusIcon from '../../img/icons/plus.svg'
const AddButton = ({open, title}) => {
  return (
    <button className="flex items-center px-3 py-1.5 text-white rounded-[50px] bg-primary500 text-sm" onClick={open}>
      <img src={PlusIcon} className="mr-2" alt="export" srcSet="" />
      {title}
    </button>
  );
}

export default AddButton