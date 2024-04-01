import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLogin } from '@/hooks/login/useLogin.ts'

export function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginMutation = useLogin()
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      await loginMutation.mutateAsync({ username, password })
      toast({
        title: 'Login bem-sucedido.',
        description: 'Você está logado.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      toast({
        title: 'Erro no login.',
        description: 'Não foi possível efetuar o login.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar portal
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe sua escola através do portal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Seu nome de usuário</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e: {
                target: { value: React.SetStateAction<string> }
              }) => setUsername(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Sua senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e: {
                target: { value: React.SetStateAction<string> }
              }) => setPassword(e.target.value)}
            />
          </div>

          <Button
            disabled={loginMutation.isLoading}
            className="w-full"
            type="submit"
          >
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
