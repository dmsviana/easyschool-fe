import {
  Copy,
  GraduationCap,
  GripVertical,
  Pencil,
  Plus,
  Trash,
} from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Label } from 'recharts'
import { v4 as uuidv4 } from 'uuid'

import { Pagination } from '@/components/Table-Pagination'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { DescriptionCourse } from './description-course'

const COURSES = [
  {
    id: '122346568779',
    category: 'Presencial',
    courses: [
      {
        id: 1,
        name: 'Start-Up',
        price: 750.0,
        description: 'Destinado para crianças de 6 a 9 anos.',
      },
    ],
  },
]

export function Courses() {
  const [categoryActions, setCategoryActions] = useState(COURSES)
  const [addCategory, setAddCategory] = useState('')

  const addNewCategory = () => {
    if (addCategory.trim() !== '') {
      const newCategory = {
        id: uuidv4(),
        category: addCategory,
        courses: [],
      }
      console.log(newCategory.id)
      setCategoryActions([...categoryActions, newCategory])
      setAddCategory('')
    }
  }

  const duplicateCategory = () => {
    if (addCategory.trim() !== '') {
      const newCategory = {
        id: uuidv4(),
        category: 'copy',
        courses: [],
      }

      setCategoryActions([...categoryActions, newCategory])
    }
  }

  return (
    <>
      <Helmet title="Cursos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Categorias dos cursos
        </h1>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="p-4 text-2xl font-medium text-muted-foreground">
              Categorias
            </h2>

            <Dialog>
              <DialogTrigger className="flex items-center">
                <Plus className="mr-2 h-4 w-4" />
                <p>Nova categoria</p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar nova categoria</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Categoria</Label>
                    <Input
                      placeholder="ex: Híbrido"
                      className="col-span-3"
                      value={addCategory}
                      onChange={(e) => setAddCategory(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button onClick={addNewCategory}>
                      Adicionar categoria
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="rounded-md border">
            {categoryActions.map((item) => (
              <div key={item.id}>
                {item.category === '' ? (
                  <></>
                ) : (
                  <>
                    <Table key={item.id}>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[64px]">
                            <GripVertical className="h-4 w-4 cursor-grab" />
                            <span className="sr-only">Mover categoria</span>
                          </TableHead>
                          <TableHead className="w-full">
                            <div className="flex">
                              <GraduationCap className="mr-2 h-4 w-4" />
                              <h1>{item.category}</h1>
                            </div>
                          </TableHead>
                          <TableHead className="w-[240px]">
                            <div className="flex gap-4">
                              <Button variant="ghost" className="p-0">
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">
                                  Editar categoria
                                </span>
                              </Button>
                              <Button
                                variant="ghost"
                                onClick={duplicateCategory}
                                className="p-0"
                              >
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">
                                  Duplicar categoria
                                </span>
                              </Button>
                              <Button variant="ghost" className="p-0">
                                <Trash className="h-4 w-4" />
                                <span className="sr-only">
                                  Excluir categoria
                                </span>
                              </Button>
                            </div>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                    </Table>
                    <div className="ml-[2%] w-[98%]">
                      <div className="flex items-center justify-between">
                        <h2 className="p-4 text-xl font-medium text-muted-foreground">
                          Produtos
                        </h2>
                        <Button variant="ghost">
                          <Plus className="mr-2 h-4 w-4" />
                          Novo produto
                        </Button>
                      </div>

                      <Table>
                        <TableBody>
                          {item.courses.map((course) => (
                            <DescriptionCourse
                              key={course.id}
                              name={course.name}
                              description={course.description}
                              price={course.price}
                            />
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
