import { SearchIcon } from 'lucide-react'
import Header from './_components/header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'
import { Card, CardContent } from './_components/ui/card'
import { Badge } from './_components/ui/badge'
import { Avatar, AvatarImage } from './_components/ui/avatar'
import { db } from './_lib/prisma'
import PersonalItem from './_components/personal-item'

const Home = async () => {
  // Chamando meu Banco de dados
  const personais = await db.personal.findMany({})

  const destaquesPersonal = await db.personal.findMany({
    orderBy: {
      name: 'desc',
    },
  })

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

        {/*Busca Rapida */}

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button
            className="gap-2 hover:bg-[hsl(var(--primary))]"
            variant="secondary"
          >
            <Image
              src="/icone-biceps.png"
              width={24}
              height={24}
              alt="Musculação"
            />
            Musculação
          </Button>

          <Button
            className="gap-2 hover:bg-[hsl(var(--primary))]"
            variant="secondary"
          >
            <Image
              src="/icone-haltere.png"
              width={24}
              height={24}
              alt="Funcional"
            />
            Funcional
          </Button>

          <Button
            className="gap-2 hover:bg-[hsl(var(--primary))]"
            variant="secondary"
          >
            <Image
              src="/icone-coração.png"
              width={24}
              height={24}
              alt="C. Cardiovascular"
            />
            C. Cardiovascular
          </Button>

          <Button
            className="gap-2 hover:bg-[hsl(var(--primary))]"
            variant="secondary"
          >
            <Image
              src="/icone-exercício.png"
              width={24}
              height={24}
              alt="T. de Alta Intensidade"
            />
            T. de Alta Intensidade
          </Button>

          <Button
            className="gap-2 hover:bg-[hsl(var(--primary))]"
            variant="secondary"
          >
            <Image src="/icone-prancheta.png" width={24} height={24} alt="" />
            Avaliação Fisica
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {personais.map((personal) => (
            <PersonalItem key={personal.id} personal={personal} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Destaques
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {destaquesPersonal.map((personal) => (
            <PersonalItem key={personal.id} personal={personal} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright{' '}
              <span className="font-bold">Magaiver Magalhaes</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
export default Home
