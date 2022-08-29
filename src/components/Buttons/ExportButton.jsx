import React from 'react'
import  DownloadIcon  from '../../img/icons/export.svg'
const ExportButton = ({ onExport }) => {
  return (
    <button
      className="flex items-center btn-export mr-2"
      onClick={(e) => onExport(e.target.value)}
    >
      <img src={DownloadIcon} className="mr-2" alt="export" srcSet="" />
      Export
    </button>
  );
};

export default ExportButton
