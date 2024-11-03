import { auth,signOut,signIn } from '@/auth';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async() => {
    const session=await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href='/'>
                <Image src='/logo.png' width={144} height={30} alt='logo'/>
            </Link>
            <div className="flex items-center gap-5">
                {session && 
                session?.user?(
                    <>
                    <Link href='/startup/create'>
                    <span>Create</span>
                    </Link>

                    <button onClick={signOut}>Sign Out</button>

                    <Link href={`/user/${session?.id}`}>
                    <span>{session?.user?.name}</span>
                    </Link>

                    </>
                ):(
                    <button onClick={signIn(provider:'github')}>Sign In</button>
                )
                }

            </div>
        </nav>
    </header>
  )
}

export default Navbar