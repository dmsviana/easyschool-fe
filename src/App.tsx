import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'
import { queryClient } from './services/queryClient'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="easyschool-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | EasySchool" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
