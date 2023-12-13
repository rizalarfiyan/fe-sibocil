import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

import LoadingScreen from '@/components/LoadingScreen'
import { COOKIE, QUERY_KEY } from '@/constants'
import { useToast } from '@/hooks/useToast'

import { AuthState } from './types'
import { me } from '../Auth/service'

export const DashboardContext = createContext<Required<AuthState> | null>(null)

const DashboardProvier: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    token: Cookies.get(COOKIE.AuthToken),
  })

  const route = useRouter()
  const { toast } = useToast()
  const { data, isSuccess, error } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [QUERY_KEY.Me],
    queryFn: () =>
      me({
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }),
  })

  const logout = () => {
    Cookies.remove(COOKIE.AuthTokenVerify)
    Cookies.remove(COOKIE.AuthToken)
    route.push('/login')
  }

  useEffect(() => {
    if (data) {
      setState({
        ...state,
        user: data.data,
      })
    }
  }, [data])

  useEffect(() => {
    if (!error) return
    toast({
      title: 'Error!',
      description: error.message,
      variant: 'destructive',
    })
    logout()
  }, [error])

  useEffect(() => {
    if (!state?.token || state?.token === '') {
      logout()
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
    console.log(axios)
  }, [state.token])

  if (isSuccess && state.user) {
    return (
      <DashboardContext.Provider value={state as Required<AuthState>}>
        {children}
      </DashboardContext.Provider>
    )
  }

  return <LoadingScreen reason='Loading your profile...' />
}

export default DashboardProvier
