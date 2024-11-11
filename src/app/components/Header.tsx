import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header className='w-full h-24 bg-slate-800 flex justify-between text-white px-5 md:px-10 items-center'>
            <div className="logo">
                <h2 className=' md:text-2xl font-bold ' ><Link href="/" >Qamar Ul Zafar</Link></h2>
                <p className='text-sm md:text-lg'>Virtual Assistant</p>
            </div>
            <div className="menu">
                <ul className='flex gap-3 text-[3vw] sm:text-sm  lg:text-lg lg:gap-10 '>
                    <li>
                        <Link href={'PriceService'}>Servise And Pricing</Link>
                    </li>
                    <li>
                        <Link href={'About'}>About</Link>
                    </li>
                    <li>
                        <Link href={'Contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header
