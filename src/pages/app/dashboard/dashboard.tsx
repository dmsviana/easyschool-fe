import { Helmet } from 'react-helmet-async'

import { DayRegistrationsAmountCard } from './day-registrations-amount-card'
import { MonthCanceledRegistrationsAmountCard } from './month-canceled-registration-card'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthStudentsAmountCard } from './month-students-amount-card'
import { PopularCoursesChart } from './popular-courses-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Painel administrativo
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthStudentsAmountCard />
          <DayRegistrationsAmountCard />
          <MonthCanceledRegistrationsAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularCoursesChart />
        </div>
      </div>
    </>
  )
}
