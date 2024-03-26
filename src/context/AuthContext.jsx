import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(loggedIn, 'это loggedIn')
  console.log(typeof loggedIn)

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
