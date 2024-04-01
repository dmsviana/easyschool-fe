import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useMutation } from 'react-query'

import { api } from '../../services/api.ts'
import { queryClient } from '../../services/queryClient.ts'

export interface LoginFormData {
  username: string
  password: string
}

type ErrorType = {
  title: string
  message: string
}

export function useLogin() {
  const toast = useToast()

  return useMutation(
    async ({ username, password }: LoginFormData) => {
      const response = await api.post(`/api/auth`, { username, password })
      await queryClient.invalidateQueries(['me'])
      return response.data
    },
    {
      onError: (error: AxiosError<ErrorType>) => {
        let errorMessage =
          'Ocorreu um erro. Por favor, tente novamente mais tarde.'
        if (error.response?.status === 403) {
          errorMessage = 'Nome de usuário ou senha incorretos.'
        }
        toast({
          title: 'Erro de autenticação',
          description: errorMessage,
          status: 'error',
          duration: 3000,
          position: 'top',
          isClosable: true,
        })
      },
    },
  )
}
