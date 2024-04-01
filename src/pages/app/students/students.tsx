import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/Table-Pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useStudent } from '@/hooks/students/useStudent'

import { StudentTableFilters } from './student-table-filters'
import { StudentTableRow } from './student-table-row'

export function Students() {
  const { data: students } = useStudent()

  return (
    <>
      <Helmet title="Alunos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Alunos</h1>

        <div className="space-y-2.5">
          <StudentTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Matrícula</TableHead>
                  <TableHead>Nome do aluno</TableHead>
                  <TableHead className="w-[180px]">E-mail</TableHead>
                  <TableHead className="w-[180px]">Telefone</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students?.map((student, i) => (
                  <StudentTableRow key={i} student={student} />
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination
            pageIndex={0}
            totalCount={students?.length ?? 0}
            perPage={10}
          />
        </div>
      </div>
    </>
  )
}
