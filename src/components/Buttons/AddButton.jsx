import React from 'react'
const AddButton = ({open, icon, title}) => {
  return (
    <button
      className="flex items-center px-3 py-1.5 text-white rounded-[50px] bg-primary500 text-sm"
      onClick={open}
    >
      {icon ? <img src={icon} className="mr-2" alt="export" srcSet="" /> : ''}
      {title}
    </button>
  );
}

export default AddButton