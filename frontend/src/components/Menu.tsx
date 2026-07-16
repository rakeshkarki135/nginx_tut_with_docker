"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links = [
    { "id":"1",  "title" : "HomePage",       "url" : "/" },
    { "id":"2",  "title" : "Menu",           "url" : "/menu" },
    { "id":"3",  "title" : "Working Hours",  "url" : "/" },
    { "id":"4",  "title" : "Contact",        "url" : "/" },
]

// for temporary use
const user = false

const MenuIcon = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <div>
            { open ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x" onClick={()=>setOpen(false)}>
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                </svg>
                
            ): (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu" onClick={()=>setOpen(true)}>
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
            )}
        </div>
        
        { open && (
            <div className="bg-red-500 text-white absolute w-full top-24 left-0 gap-8 flex flex-col justify-center items-center h-[calc(100vh-6rem)] z-10">
                {links.map((link)=>(
                    <Link key={link.id} href={link.url} onClick={()=>setOpen(false)}>{link.title}</Link>
                ))}
    
                { !user ? (
                    <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
                    ) : (
                        <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
                    )
                }
    
                <Link href="/cart" onClick={()=>setOpen(false)}>
                    <CartIcon />
                </Link>
                
            </div>
        )}

        </>
    )
}

export default MenuIcon