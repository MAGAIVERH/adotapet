import Header from './_components/header'
import { Button } from './_components/ui/button'
import Image from 'next/image'
import { db } from './_lib/prisma'
import PersonalItem from './_components/personal-item'
import { quickSearchOptions } from './_constants/search'
import BookingItem from './_components/booking-item'
import Search from './_components/search'
import Link from 'next/link'

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
        <div className="mt-6">
          <Search />
        </div>

        {/*Busca Rapida */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2 hover:bg-[hsl(var(--primary))]"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/personais?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={24}
                  height={24}
                  alt={option.title}
                />
                {option.title}
              </Link>
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
    </div>
  )
}
export default Home
