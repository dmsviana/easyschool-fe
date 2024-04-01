import { GraduationCap, Home, School, UsersRound } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import { AccountMenu } from './Account-Menu'
import { NavLink } from './NavLink'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <School className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/dashboard">
            <Home className="h-4 w-4" /> Inicio
          </NavLink>

          <NavLink to="/students">
            <UsersRound className="h-4 w-4" /> Alunos
          </NavLink>

          <NavLink to="/courses">
            <GraduationCap className="h-4 w-4" /> Cursos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
