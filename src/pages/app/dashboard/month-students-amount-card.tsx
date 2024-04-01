import { UserRoundPlus } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useDashboard } from '@/hooks/dashboard/useDashboard.ts'

export function MonthStudentsAmountCard() {
  const data = useDashboard()

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Novos alunos (mês)
        </CardTitle>
        <UserRoundPlus className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          {data.totalStudentsOnCurrentMonth || 0}
        </span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em
          relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
