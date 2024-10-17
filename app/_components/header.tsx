import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src="/Logo-seu-personal.png"
          height={20}
          width={140}
          alt="Logo Seu Personal"
        />

        <Button size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
