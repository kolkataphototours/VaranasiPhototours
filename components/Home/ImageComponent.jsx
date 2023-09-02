"use client"
import Image from 'next/image'
import Link from 'next/link';

const GlassmorphicImage = ({ heading, path, src }) => {
    return (
        <Link href={`/gallery/${path}`} class="relative m-4 shadow-lg border-8 shadow-gray-500 border-white rounded-xl overflow-hidden">
            <div className="w-88 h-80 flex items-center justify-center">
                <Image src={src} alt="Your Image" class="w-full h-full object-cover" height={500} width={500} />
            </div>
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <h1 class="text-white text-2xl md:text-3xl text-center font-sang  font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {heading}
            </h1>
        </Link>
    );
};

export default GlassmorphicImage;
