import React from 'react'
import  DownloadIcon  from '../../img/icons/export.svg'
const ExportButton = () => {
  return (
    <button className='flex items-center btn-export'>
      <img src={DownloadIcon} className='mr-2' alt="export" srcset="" />
      Export
    </button>
  )
}

export default ExportButton