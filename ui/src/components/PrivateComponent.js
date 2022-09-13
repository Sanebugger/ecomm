import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

export default function PrivateCOmponent() {

  const auth =localStorage.getItem('userDetail');

  return (
    auth? < Outlet/> : <Navigate to="/SignUp"/>
  )
}
