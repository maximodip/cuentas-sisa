import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { Toaster } from 'react-hot-toast'
import { ListPlus, ScrollText, Boxes } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuentas Sisa',
  description:
    'Aplicacion web para llevar la cuenta de las fichas de los clientes de farmacia sisa',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`uppercase ${inter.className}`}>
        <header className='p-4 bg-slate-300 text-[#000] flex flex-col gap-y-4'>
          <div className='flex items-center justify-center gap-x-2'>
            <Image
              src='/logo.jpg'
              width={32}
              height={32}
              className='rounded-full '
            />
            <h1 className='font-semibold'>Cuentas Sisa</h1>
          </div>
          <nav className='flex items-center justify-around'>
            <Link
              href='/'
              className='flex items-center text-xl hover:underline gap-x-2'
            >
              Todas las cuentas
              <ScrollText className='opacity-50' />
            </Link>
            <Link
              href='/orders/new'
              className='flex items-center text-xl hover:underline gap-x-2'
            >
              Nueva cuenta
              <ListPlus className='opacity-50' />
            </Link>
            <Link
              href='/upload-products'
              className='flex items-center text-xl hover:underline gap-x-2'
            >
              Actualizar precios
              <Boxes className='opacity-50' />
            </Link>
          </nav>
        </header>
        <Toaster position='bottom-center' reverseOrder='false' />
        {children}
      </body>
    </html>
  )
}
