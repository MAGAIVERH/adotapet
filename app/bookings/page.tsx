import { getServerSession } from 'next-auth'
import Header from '../_components/header'
import { db } from '../_lib/prisma'
import { authOptions } from '../_lib/auth'
import { notFound } from 'next/navigation'
import BookingItem from '../_components/booking-item'

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  // TODO mostar pop-up de login
  if (!session?.user) {
    return notFound()
  }
  const confirmedBookings = await db.booking.findMany({
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

  const concludedBookings = await db.booking.findMany({
    where: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userId: (session?.user as any).id,
      date: {
        lte: new Date(),
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
  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Confirmados
        </h2>
        {confirmedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Finalizados
        </h2>
        {concludedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  )
}

export default Bookings