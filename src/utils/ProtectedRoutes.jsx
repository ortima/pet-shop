/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth()
  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoutes
