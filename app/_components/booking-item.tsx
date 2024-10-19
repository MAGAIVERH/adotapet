import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

// TODO receber agedamentos como prop
const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem
