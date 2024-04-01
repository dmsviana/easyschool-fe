import { Pencil, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { Student } from '@/models/Student'

import { StudentDetails } from './student-details'

interface StudentTableRowProps {
  student: Student
}

export function StudentTableRow({ student }: StudentTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do aluno</span>
            </Button>
          </DialogTrigger>

          <StudentDetails student={student} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        {student.registration}
      </TableCell>
      <TableCell className="font-medium">{student.name}</TableCell>
      <TableCell className="text-muted-foreground">{student.email}</TableCell>
      <TableCell className="text-muted-foreground">
        {student.phoneNumber}
      </TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Ativo</span>
        </div>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <Pencil className="mr-2 h-3 w-3" />
          Editar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Deletar
        </Button>
      </TableCell>
    </TableRow>
  )
}
