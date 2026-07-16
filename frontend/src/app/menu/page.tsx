import React from 'react'
import { menu } from '@/data'
import Link from 'next/link'

const MenuPage = () => {
    return (
        <div className="p-4 h-[calc(100vh-6rem)] lg:px-20 xl:px-40 md:h-[calc(100vh-9rem)]  flex flex-col items-center md:flex-row">

        {
            menu.map((category)=>(

                <Link key={category.id}
                    href={`/menu/${category.slug}`} 
                    className="w-full h-1/3 bg-cover p-8 md:h-1/2" 
                    style={{backgroundImage:`url(${category.img})`}}
                    >
                
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
                        <p className="text-sm py-8">{category.desc}</p>
                        <button className={`hidden 2xl:block ${category.color === "black" ? "text-white" : "text-red-500" } text-red-500 py-2 px-4 rounded-md`} style={{backgroundColor : category.color}}>Explore</button>
                    </div>

                </Link>

            ))
        }

        </div>

    )
}

export default MenuPage