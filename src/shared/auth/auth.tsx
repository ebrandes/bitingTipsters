import {AuthContext} from './auth.context'
import {useAuth} from './auth.hook'
import {AuthProviderPropsType} from './auth.type'

export const AuthProvider = ({children}: AuthProviderPropsType) => {
  const value = useAuth()

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
