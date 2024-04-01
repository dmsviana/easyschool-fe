import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'

import { api } from '@/services/api'

type User = {
  id: number
  name: string
  username: string
  email: string
  admin: boolean
}

export async function getMe(): Promise<User> {
  const response = await api.get('v1/api/me')
  return response.data
}

export function useMe() {
  const navigate = useNavigate()
  const location = useLocation()

  return useQuery(['me'], getMe, {
    onError: () => {
      navigate('/sign-in')
    },
    enabled: location.pathname !== '/sign-in',
    retry: false,
  })
}
