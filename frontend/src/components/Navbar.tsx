import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import MenuIcon from './Menu'
import CartIcon from './CartIcon'


const Navbar = () => {
    const user = false

    return (
        <div className="h-12 p-4 text-red-500 border-b-2 border-red-500 flex justify-around items-center uppercase md:h-24 lg:px-20 xl:px-40">
            
            {/* left links */}
            <div className="hidden md:flex gap-4 flex-1 ">
                <Link href="/">HomePage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Contact</Link>
            </div>

            <div className="text-xl md:font-bold flex-1 text-center"><Link href="/">Rakesh Fast Food</Link></div>

            {/* for mobile  */}
            <div className="md:hidden "> <MenuIcon /> </div>

            {/* right links */}
            <div className="hidden md:flex gap-4 items-center justify-end flex-1" >
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
                    <Image src="/temporary/phone.png" alt="phone-logo" width={18} height={18} />
                    <span>345 678 34</span>

                </div>

                { !user ? (
                    <Link href="/">Login</Link>
                ):(
                    <Link href="/orders">Orders</Link>
                )}

                <CartIcon />
            </div>
            
        </div>
    )
}

export default Navbar