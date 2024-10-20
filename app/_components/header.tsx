import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import SidebarSheet from './sidebar-sheet'

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

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="border-0">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
