import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Account = () => {
  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('You are logged out')
    } catch (e) {
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
