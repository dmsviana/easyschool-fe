import { createBrowserRouter } from 'react-router-dom'

import { Profile } from '@/pages/app/profile/profile.tsx'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/app/404'
import { Courses } from './pages/app/courses/courses'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Students } from './pages/app/students/students'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/students', element: <Students /> },
      { path: '/courses', element: <Courses /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
