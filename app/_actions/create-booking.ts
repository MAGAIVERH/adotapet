'use server'

import { revalidatePath } from 'next/cache'
import { db } from '../_lib/prisma'

interface CreateBookingParams {
  userId: string
  serviceId: string
  date: Date
}
export const createBooking = async ({
  userId,
  serviceId,
  date,
}: CreateBookingParams) => {
  await db.booking.create({
    data: {
      userId,
      serviceId,
      date,
    },
  })
  revalidatePath('/personais/[id]')
}
