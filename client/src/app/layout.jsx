import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import { OrderProvider } from '../context/OrderContext'

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
        <Header />
        <Toaster position='bottom-center' reverseOrder='false' />
        <div className='mx-auto max-w-screen-lg'>
          <OrderProvider>
            {children}
          </OrderProvider>
        </div>
      </body>
    </html>
  )
}
