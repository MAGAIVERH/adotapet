import ServiceItem from '@/app/_components/service-item'
import { Button } from '@/app/_components/ui/button'
import { db } from '@/app/_lib/prisma'
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PersonalPageProps {
  params: {
    id: string
  }
}

const PersonalPage = async ({ params }: PersonalPageProps) => {
  // Chamar banco de dados
  const personal = await db.personal.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!personal) {
    return notFound()
  }

  return (
    <div>
      {/*Imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          src={personal?.imageUrl}
          fill
          className="object-cover"
          alt={personal?.name}
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4 hover:bg-[hsl(var(--primary))]"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4 hover:bg-[hsl(var(--primary))]"
        >
          <MenuIcon />
        </Button>
      </div>

      {/*Titulo address favoritos*/}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{personal.name}</h1>

        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{personal.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (499 Avaliações)</p>
        </div>
      </div>

      {/*Descrição */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">
          {' '}
          Sobre nós
        </h2>
        <p className="text-justify text-sm">{personal.description}</p>
      </div>

      {/* Serviços */}
      <div className="space-y-3 p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400"> Serviços</h2>
        <div className="space-y-3">
          {personal.services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonalPage
