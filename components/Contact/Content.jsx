"use client"
import React from 'react'
import poster from '../../public/images/contact/poster.jpg'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Content = () => {
  return (
    <div >
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={2000}
      >
        <div>
          <Image src={poster} className="d-block h-[500px] md:h-screen object-cover w-screen" alt={"picture"} />
        </div>
      </Carousel>
      <div className='mt-8 drop-shadow-xl text-center flex justify-center'>
        <p className='w-11/12 md:w-1/2 text-xl font-ste font-medium text-center'>Get in touch with us for any questions. We are always happy to have you and work with you.</p>
      </div>
    </div>
  )
}

export default Content