import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Card, CardContent } from './ui/card'
import { Personal, PersonalService } from '@prisma/client'

interface BookingSummaryProps {
  service: Pick<PersonalService, 'name' | 'price'>
  personal: Pick<Personal, 'name'>
  selectedDate: Date
}

const BookingSummary = ({
  service,
  personal,
  selectedDate,
}: BookingSummaryProps) => {
  return (
    <Card>
      <CardContent className="space-y-3 p-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">{service.name}</h2>
          <p className="text-sm font-bold">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(Number(service.price))}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-400">Data</h2>
          <p className="text-sm">
            {format(selectedDate, "d 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-400">Horário</h2>
          <p className="text-sm">{format(selectedDate, 'HH:mm')}</p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-400">Personal</h2>
          <p className="text-sm">{personal.name}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookingSummary
