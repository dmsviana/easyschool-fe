import { format } from 'date-fns'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Student } from '@/models/Student'

interface StudentDetailsProps {
  student: Student
}

export function StudentDetails({ student }: StudentDetailsProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Matrícula: {student.registration}</DialogTitle>
        <DialogDescription>Detalhes do aluno</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Ativo
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Nome do aluno
              </TableCell>
              <TableCell className="flex justify-end">{student.name}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                {student.phoneNumber}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                {student.email}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Dt. ingresso
              </TableCell>
              <TableCell className="flex justify-end">3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mensalidades</TableHead>
              <TableHead className="text-right">Identificador</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {student.fees.map((fee, index) => (
              <TableRow key={index}>
                <TableCell>
                  {format(new Date(fee.dueDate), 'dd/MM/yyyy')}
                </TableCell>
                <TableCell className="text-right">{fee.id}</TableCell>
                <TableCell className="text-right">
                  R$ {fee.price.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>
                Total de mensalidades não pagas:
              </TableCell>
              <TableCell className="text-right font-medium">
                R${' '}
                {student.fees
                  .reduce((total, fee) => total + fee.price, 0)
                  .toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
