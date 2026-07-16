"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const data = [
    { id: "1", title: "always fresh & crispy & hot", path: "/temporary/slide1.png" },
    { id: "2", title: "we deliver your order wherever you are in", path: "/temporary/slide2.png" },
    { id: "3", title: "the best to share with your family", path: "/temporary/slide3.jpg" },
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === data.length -1 ? 0 : prev + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
            {/* text-container */}
            <div className="flex-1 flex flex-col gap-8 items-center justify-center text-red-500 font-bold">
                <h1 className="text-5xl text-center md:p-10 md:text-6xl xl:text-7xl uppercase p-4">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8 rounded-xl">Order Now</button>
            </div>

            {/* image container */}
            <div className="w-full flex-1 relative">
                <Image src={data[currentSlide].path} alt="" fill className="object-cover" />
            </div>
        </div>
    )
}

export default Slider
