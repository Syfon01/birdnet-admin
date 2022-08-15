import React from 'react'
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = ({children , user}) => {
  if(!user) {
    return <Navigate to="/"/>
  }
  return (children ? children : <Outlet/>
 );
}

export default ProtectedRoute