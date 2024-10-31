import { Button } from '@/components/ui/button'
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const SignInDialog = () => {
  const handleLoginWithGoogleClick = async () => {
    await signIn('google')
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/icone-google.png"
          width={18}
          height={18}
          alt="Fazer login com o Google"
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
