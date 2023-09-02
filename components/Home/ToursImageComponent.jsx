"use client"
import Image from 'next/image'
import Link from 'next/link';

const GlassmorphicImage = ({ heading, path, src, text }) => {
    return (
        <Link href={`/tours-workshops/${path}`} className="relative m-4 shadow-lg border-8 shadow-gray-500 border-white rounded-xl overflow-hidden">
            <div className="relative">
                <Image src={src} alt="Your Image" className="w-full h-full object-cover" height={500} width={500} />

                <div className="inset-0 h-20 bg-white flex items-center justify-center flex-col">
                    <h1 className="text-black text-xl md:text-2xl text-center font-sang font-bold">
                        {heading}
                    </h1>
                    <p className="text-black text-center font-ste">
                        {text}... <Link className="text-black underline hover:text-blue-800" href={`/tours-workshops/${path}`}>Read more!</Link>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default GlassmorphicImage;

