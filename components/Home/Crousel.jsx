"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import one from './assets/1.jpg';
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'


const Crousel = () => {
    return (
        <div className="relative">
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                interval={2000}
            >
                <div>
                    <Image src={one} className="d-block h-[500px] md:h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={two} className="d-block h-[500px] md:h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={three} className="d-block h-[500px] md:h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={four} className="d-block h-[500px] md:h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={five} className="d-block h-[500px] md:h-screen object-cover w-screen" alt={"picture"} />
                </div>
            </Carousel>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black opacity-50 z-8 flex justify-center items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white z-20 font-sang inline-block  md:px-8  md:py-4">
                    Varanasi Photo Tours
                </h1>
            </div>
        </div>
    )
}

export default Crousel