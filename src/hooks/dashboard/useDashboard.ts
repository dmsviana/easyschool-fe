import { useEffect, useState } from 'react'

import { api } from '@/services/api.ts'

interface DashboardData {
  totalStudentsOnCurrentMonth: number
}

export function useDashboard(): DashboardData {
  const [data, setData] = useState<DashboardData>({
    totalStudentsOnCurrentMonth: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<DashboardData>('/api/v1/dashboard')
        setData(response.data)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    fetchData()
  }, [])

  return data
}
