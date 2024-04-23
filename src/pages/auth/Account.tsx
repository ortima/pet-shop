import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { AuthContextType } from '../../context/types/authTypes'

const Account: React.FC = () => {
  const { user, logout } = UserAuth() as AuthContextType
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out')
    } catch (e: any) {
      console.log(e.message)
    }
  }

  return (
    <>
      <div className="max-w-[600px] mx-auto my-16 p-4">
        <h1 className="text-2xl font-bold py-4">Аккаунт</h1>
        <p>Email: {user && user.email}</p>

        <button
          onClick={handleLogout}
          className="bg-black text-white hover:bg-slate-500 border px-6 py-2 my-4"
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default Account
