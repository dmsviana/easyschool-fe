import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { api } from '@/services/api'

export interface Course {
  name: string
  description: string
}

export function useCourse() {
  const toast = useToast()

  return useQuery<Course[], AxiosError>(
    'lastTwoCourses',
    async () => {
      const response = await api.get('/v1/api/courses/last-two')
      return response.data
    },
    {
      onError: (error: AxiosError) => {
        toast({
          title: 'Erro ao buscar os últimos cursos',
          description: 'Não foi possível buscar os últimos cursos adicionados.',
          status: 'error',
          duration: 3000,
          position: 'top',
          isClosable: true,
        })
      },
    },
  )
}
