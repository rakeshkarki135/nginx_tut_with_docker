import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offers = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]">
            {/* textcontainer */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
                <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger and French Fries</h1>
                <p className="text-white  xl:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Ducimus voluptatibus eveniet perferendis dolores, ea illum possimus quibusdam.
                    Dignissimos laudantium, quia dicta maxime enim sit similique sunt unde deleniti molestiae nihil.
                </p>

                <CountDown />

                <button className="bg-red-500 text-white rounded-md py-3 px-6">Order Now</button>
            </div>

            {/* image container */}
            <div className="flex-1 w-full relative md:h-full">
                <Image src="/temporary/offerProduct.png" alt='offer-img' fill className="object-contain" />
            </div>
        </div>
    )
}

export default Offers