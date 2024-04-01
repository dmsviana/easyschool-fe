import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { Student } from '@/models/Student'
import { api } from '@/services/api'

export function useStudent() {
  const toast = useToast()

  return useQuery<Student[], AxiosError>(
    'find-student',
    async () => {
      const response = await api.get('/v1/api/students/get-all')

      if (response.data && Array.isArray(response.data.content)) {
        return response.data.content
      } else {
        throw new Error('A resposta da API não contém uma lista de estudantes.')
      }
    },
    {
      onError: (error: AxiosError) => {
        toast({
          title: 'Erro ao buscar os alunos',
          description: 'Não foi possível buscar os alunos.',
          status: 'error',
          duration: 3000,
          position: 'top',
          isClosable: true,
        })
      },
    },
  )
}
