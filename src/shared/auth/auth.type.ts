import {ReactNode} from 'react'
import {User} from '@supabase/supabase-js'

export type AuthProfileType = {
  id: string
  name: string
  email: string
  phone?: string | null
  avatarUrl?: string | null
  activePlan?: string | null
  planExpiresAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export type AuthContextType = {
  user: User | null
  profile: AuthProfileType | null
  error: string | null
  isLoading: boolean
  signin: (email: string, password: string) => Promise<void>
  signup: (profile: Partial<AuthProfileType>, password: string) => Promise<void>
  signout: () => Promise<void>
}

export type AuthProviderPropsType = {
  children?: ReactNode
}
