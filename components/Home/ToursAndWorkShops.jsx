import React from 'react'
import GlassmorphicImage from './ToursImageComponent'
import pic from './assets/2.jpg'
import Link from 'next/link'
import Image from 'next/image'

const ToursAndWorkShops = () => {
    return (
        <div>
            <h1 class="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-sang ">Tours and Workshops</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  md:mx-20">
                <GlassmorphicImage src={'/images/Toursworkshops/Phototours/1.jpg'} heading="PHOTO TOURS" text="If you are planning to Visit Varanasi" path="photo-tours" />
                <GlassmorphicImage src={'/images/Toursworkshops/Workshop/1.jpg'} heading={"WORKSHOPS"} text={"Enhance your photography skills With Shivam"} path="workshops" />
            </div>
            <div className="flex items-center justify-center">
                <Link href={`/tours-workshops/customized`} className="relative m-4 grid shadow-lg border-8 shadow-gray-500 border-white rounded-xl overflow-hidden">
                    <div className="">
                        <Image src={'/images/Toursworkshops/Customized/6.jpg'} alt="Your Image" className="object-contain w-auto" height={500} width={500} />

                        <div className="inset-0 h-20 bg-white flex items-center justify-center flex-col">
                            <h1 className="text-black text-xl md:text-2xl text-center font-sang font-bold">
                                Customized Photo Tours
                            </h1>
                            <p className="text-black text-center font-ste">
                                Experience other captivating destinations in India.... <Link className="text-black underline hover:text-blue-800" href={`/tours-workshops/customized`}>Read more!</Link>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ToursAndWorkShops