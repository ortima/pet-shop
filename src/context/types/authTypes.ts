import { User, UserCredential } from 'firebase/auth'

export interface AuthContextType {
  user: User | null
  createUser: (
    email: string,
    password: string
  ) => Promise<void | UserCredential>
  signIn: (email: string, password: string) => Promise<void | UserCredential>
  logout: () => Promise<void>
}
