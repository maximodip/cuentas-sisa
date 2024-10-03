import { ListPlus, ScrollText, Boxes } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
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
            </header>
            <nav className='flex items-center mx-auto max-w-screen-lg justify-around mt-4 flex-wrap'>
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
                    href='/products'
                    className='flex items-center text-xl hover:underline gap-x-2'
                >
                    Productos
                    <Boxes className='opacity-50' />
                </Link>
            </nav>
        </>
    )
}