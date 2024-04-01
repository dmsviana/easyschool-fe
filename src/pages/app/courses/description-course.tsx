import { Copy, GripVertical, Pencil, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

interface CourseProps {
  name: string
  description: string
  price: number
}

export function DescriptionCourse({ description, name, price }: CourseProps) {
  return (
    <TableRow>
      <TableCell className="w-[64px]">
        <GripVertical className="h-4 w-4 cursor-grab" />
        <span className="sr-only">Mover curso</span>
      </TableCell>
      <TableCell className="w-[128px]">
        <img
          src="https://www.easyidiomas.net.br/images/siteEl/cursos/Start_up.png"
          alt="Foto do curso"
          width={100}
          height={100}
          className="rounded-2xl"
        />
      </TableCell>
      <TableCell>
        <h4 className="text-xl font-medium">{name}</h4>
        <p className="text-muted-foreground">{description}</p>
        <span className="text-xl font-bold text-primary">R${price}</span>
      </TableCell>
      <TableCell className="w-[140px]">
        <div className="flex gap-4">
          <Button variant="ghost" className="p-0">
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Editar categoria</span>
          </Button>
          <Button variant="ghost" className="p-0">
            <Copy className="h-4 w-4" />
            <span className="sr-only">Duplicar categoria</span>
          </Button>
          <Button variant="ghost" className="p-0">
            <Trash className="h-4 w-4" />
            <span className="sr-only">Excluir categoria</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
