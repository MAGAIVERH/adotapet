import { SearchIcon } from 'lucide-react'
import Header from './_components/header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'
import { Card, CardContent } from './_components/ui/card'
import { db } from './_lib/prisma'
import PersonalItem from './_components/personal-item'
import { quickSearchOptions } from './_constants/search'
import BookingItem from './_components/booking-item'

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
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2 hover:bg-[hsl(var(--primary))]"
              variant="secondary"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                width={24}
                height={24}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
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
        <BookingItem />

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
