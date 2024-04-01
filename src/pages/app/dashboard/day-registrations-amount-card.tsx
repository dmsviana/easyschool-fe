import { UserCheck } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayRegistrationsAmountCard() {
  // TODO - Utilizar dados do backend (API), utilizando o hook useDashboard

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Matrículas (Dia)
        </CardTitle>
        <UserCheck className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-4%</span> em
          relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  )
}
