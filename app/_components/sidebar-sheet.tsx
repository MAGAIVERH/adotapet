import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { HomeIcon, CalendarIcon, LogOutIcon, LogInIcon } from 'lucide-react'
import { Button } from './ui/button'
import { quickSearchOptions } from '../_constants/search'
import Image from 'next/image'

import Link from 'next/link'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import {
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'

const SidebarSheet = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        <h2 className="text-lg font-bold">Olá faça seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google
              </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="gap-1 font-bold">
              <Image
                src="/icone-google.png"
                width={18}
                height={18}
                alt="Fazer login com o Google"
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            className="justify-start gap-2"
            variant="ghost"
            key={option.title}
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
