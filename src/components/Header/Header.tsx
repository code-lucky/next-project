import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Header() {
  return (
    <>
      <header className='flex justify-center px-5 border-b'>
        <section className="max-w-screen-xl w-full flex h-14 items-center md:gap-28 sm:gap-10 gap-5">
          <Image src="vercel.svg" alt="Logo" width={100} height={100} />
          <menu className='flex md:gap-9 sm:gap-5 gap-3 flex-1'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Project</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </menu>
          <div>Sign In</div>
        </section>
      </header>
    </>
  )
}
