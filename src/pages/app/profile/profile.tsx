// import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMe } from '@/hooks/useMe.ts'

export function Profile() {
  // const [profileImage, setProfileImage] = useState(null)

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]
  //   if (file) {
  //     const reader = new FileReader()
  //     reader.onload = (e: any) => {
  //       setProfileImage(e.target.result)

  //       console.log(profileImage)
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }

  const { data: user } = useMe()

  return (
    <>
      <Helmet title="Perfil" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Perfil do estabelecimento
        </h1>

        <div className="relative flex w-full flex-col items-center justify-center">
          <img
            src="https://github.com/gadiegon.png"
            alt="Foto do user"
            width={100}
            height={100}
            className="mb-4 rounded-full"
          />
          <span>{user.name}</span>
          <span className="mb-4 text-sm font-normal text-muted-foreground">
            {user.email}
          </span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Editar perfil</DialogTitle>
                <DialogDescription>
                  Faça alterações em seu perfil aqui. Clique em salvar quando
                  estiver feito.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="profileImage" className="text-right">
                    Profile Image
                  </Label>
                  <Input
                    id="profileImage"
                    type="file"
                    accept="image/*"
                    // onChange={handleImageChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    defaultValue={user?.name}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    className="col-span-3"
                    defaultValue={user.email}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}
