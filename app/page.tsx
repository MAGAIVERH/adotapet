import { SearchIcon } from 'lucide-react'
import Header from './_components/header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'
import { Card, CardContent } from './_components/ui/card'
import { Badge } from './_components/ui/badge'
import { Avatar, AvatarImage } from './_components/ui/avatar'

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        {/*Texto */}
        <h2 className="text-xl font-bold">Ola, Magaiver!</h2>
        <p className="">Quinta Feira, 17 de Outubro</p>

        {/*Busca */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/*Image */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/Banner1.png"
            fill
            className="rounded-xl object-cover"
            alt="Os melhores profissionais para você"
          />
        </div>

        {/*Agendamento */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/*Esquerda*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Treinamento Funcional</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://img.freepik.com/fotos-premium/fotografia-de-bela-jovem-treinadora-de-fitness_1288657-24579.jpg?w=996" />
                </Avatar>

                <p className="text-sm">Pedro Bomba</p>
              </div>
            </div>

            {/*Direita*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Outubro</p>
              <p className="text-2xl">17</p>
              <p className="text-sm">18:10</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
