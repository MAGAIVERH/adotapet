import Header from './_components/header'
import { Button } from './_components/ui/button'
import Image from 'next/image'
import { db } from './_lib/prisma'
import PersonalItem from './_components/personal-item'
import { quickSearchOptions } from './_constants/search'
import BookingItem from './_components/booking-item'
import Search from './_components/search'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './_lib/auth'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const Home = async () => {
  const session = await getServerSession(authOptions)

  const personais = await db.personal.findMany({})

  const destaquesPersonal = await db.personal.findMany({
    orderBy: {
      name: 'desc',
    },
  })

  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          userId: (session?.user as any).id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              personal: true,
            },
          },
        },
        orderBy: {
          date: 'asc',
        },
      })
    : []

  return (
    <div>
      <Header />

      <div className="p-5">
        {/*Texto */}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : 'Seja bem vindo!'}
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), 'EEEE, dd', { locale: ptBR })}{' '}
          </span>
          de
          <span className="capitalize">
            {' '}
            {format(new Date(), 'MMMM', { locale: ptBR })}
          </span>
        </p>

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
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            <div className="flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

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
