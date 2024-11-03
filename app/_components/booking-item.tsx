'use client'

import { Prisma } from '@prisma/client'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { format, isFuture } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import PhoneItem from './phone-item'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { deleteBooking } from '../_actions/delete-booking'
import { toast } from 'sonner'
import { useState } from 'react'

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include: {
          personal: true
        }
      }
    }
  }>
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const isConfirmed = isFuture(booking.date)

  const handleCancelBooking = async () => {
    try {
      await deleteBooking(booking.id)
      setIsSheetOpen(false)
      toast.success('Reserva cancelada com sucesso!')
    } catch (error) {
      console.error(error)
      toast.error('Error ao cancelar reserva. Tente novamente.')
    }
  }

  const handleSheetOpenChange = (isOpen: boolean) => {
    setIsSheetOpen(isOpen)
  }
  return (
    <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
      <SheetTrigger className="w-full">
        <Card className="min-w-[90%]">
          <CardContent className="flex justify-between p-0">
            {/*Esquerda*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge
                className="w-fit"
                variant={isConfirmed ? 'default' : 'secondary'}
              >
                {isConfirmed ? 'Confirmado' : 'Finalizado'}
              </Badge>
              <h3>{booking.service.name}</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={booking.service.personal.imageUrl} />
                </Avatar>

                <p className="text-sm">{booking.service.personal.name}</p>
              </div>
            </div>

            {/*Direita*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm capitalize">
                {format(booking.date, 'MMMM', { locale: ptBR })}
              </p>
              <p className="text-2xl">
                {format(booking.date, 'dd', { locale: ptBR })}
              </p>
              <p className="text-sm">
                {format(booking.date, 'HH:mm', { locale: ptBR })}
              </p>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>

      <SheetContent className="w-[85%]">
        <SheetHeader>
          <SheetTitle className="text-left">Informações da Reserva</SheetTitle>
        </SheetHeader>

        <div className="relative mt-6 flex h-[180px] w-full items-end">
          <Image
            src="/map.png"
            fill
            className="rounded-xl object-cover"
            alt={`Mapa da Academia onde trabalha o personal ${booking.service.personal.name}`}
          />

          <Card className="z-50 mx-5 mb-3 w-full rounded-xl">
            <CardContent className="flex items-center gap-3 px-5 py-3">
              <Avatar>
                <AvatarImage src={booking.service.personal.imageUrl} />
              </Avatar>

              <div className="">
                <h3 className="font-bold">{booking.service.personal.name}</h3>
                <p className="text-xs">{booking.service.personal.address}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Badge
            className="w-fit"
            variant={isConfirmed ? 'default' : 'secondary'}
          >
            {isConfirmed ? 'Confirmado' : 'Finalizado'}
          </Badge>

          <Card className="mb-6 mt-3">
            <CardContent className="space-y-3 p-3">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">{booking.service.name}</h2>
                <p className="text-sm font-bold">
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(Number(booking.service.price))}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-sm text-gray-400">Data</h2>
                <p className="text-sm">
                  {format(booking.date, "d 'de' MMMM", {
                    locale: ptBR,
                  })}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-sm text-gray-400">Horário</h2>
                <p className="text-sm">
                  {format(booking.date, 'HH:mm', { locale: ptBR })}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-sm text-gray-400">Personal</h2>
                <p className="text-sm">{booking.service.personal.name}</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            {booking.service.personal.phones.map((phone) => (
              <PhoneItem key={phone} phone={phone} />
            ))}
          </div>
        </div>

        <SheetFooter className="mt-6">
          <div className="flex items-center gap-3">
            <SheetClose asChild>
              <Button variant="secondary" className="w-full">
                Voltar
              </Button>
            </SheetClose>

            {isConfirmed && (
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button variant="destructive" className="w-full">
                    Cancelar Reserva
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%] rounded-xl">
                  <DialogHeader>
                    <DialogTitle>Você quer cancelar sua reserva?</DialogTitle>
                    <DialogDescription>
                      Você tem certeza que deseja fazer o cancelamento? Essa
                      ação é irreversível.
                    </DialogDescription>
                  </DialogHeader>

                  <DialogFooter className="flex flex-row gap-3 rounded-xl">
                    <DialogClose asChild>
                      <Button variant="secondary" className="w-full">
                        Cancelar
                      </Button>
                    </DialogClose>
                    <DialogClose className="w-full">
                      <Button
                        variant="destructive"
                        className="w-full"
                        onClick={handleCancelBooking}
                      >
                        Confirmar
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default BookingItem
