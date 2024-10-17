import { SearchIcon } from 'lucide-react'
import Header from './_components/header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Magaiver!</h2>
        <p className="">Quinta Feira, 17 de Outubro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/Banner.png"
            fill
            className="rounded-xl object-cover"
            alt="Os melhores profissionais para você"
          />
        </div>
      </div>
    </div>
  )
}
