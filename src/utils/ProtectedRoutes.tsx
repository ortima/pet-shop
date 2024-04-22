import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { AuthContextType } from '../context/types/authTypes'

interface ProtectedRoutesProps {
  children: React.ReactNode
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { user } = UserAuth() as AuthContextType
  if (!user) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default ProtectedRoutes
