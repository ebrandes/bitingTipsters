import {createContext, useContext} from 'react'
import {AuthContextType} from './auth.type'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return context
}
