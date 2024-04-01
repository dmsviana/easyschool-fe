import { useToast } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'

import { api } from '@/services/api'

export interface CalendarLesson {
  subject: string
  teacherName: string
  daysOfWeek: string[]
  startTime: string
}

export interface LessonResponse {
  content: CalendarLesson[]
}

export function useLesson() {
  const toast = useToast()

  return useQuery<LessonResponse, AxiosError>(
    'upcomingLessons',
    async () => {
      const response = await api.get('/v1/api/lessons/get-calendar')
      return response.data
    },
    {
      onError: (error: AxiosError) => {
        toast({
          title: 'Erro ao buscar as próximas aulas',
          description: 'Não foi possível buscar as próximas aulas e eventos.',
          status: 'error',
          duration: 3000,
          position: 'top',
          isClosable: true,
        })
      },
    },
  )
}
