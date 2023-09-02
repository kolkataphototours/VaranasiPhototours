
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function Testimonial({number,testimonialDetails}) {
  return (
    <div className='flex h-fit justify-center overflow-hidden'>
      <div className='flex flex-col items-center  text-center rounded-2xl shadow-md my-16'>
        <div className='p-8 lg:p-8 grid lg:grid-cols-3 items-center -mt-4 justify-items-center'>
          {/* Map over the testimonials array */}
          {testimonialDetails.map((testimonial, index) => (
            <div
              key={index}
              className='flex flex-col text-center items-center rounded-3xl w-80 p-4 shadow-2xl m-8 lg:m-4 xl:m-8 '
            >
              <Image src={require(`../../public/images/reviews/profile-image/${testimonial.profilePic}.jpg`)} height={200} width={200} alt='pic' className='h-16 w-16 rounded-full' />
              <h2 className='my-1 font-sang font-semibold text-base tracking-wider md:text-lg'>{testimonial.name}</h2>
             
              <h1 className='text-lg mb-2 text-sky-700 font-medium tracking-wide font-ste'>{testimonial.place}</h1>
              <div className='h-0.5 w-full my-2 bg-black opacity-5'></div>
              <p className='font-medium font-ste text-base md:text-lg mt-2 p-2'>{testimonial.text} (<Link href={`/reviews/${`${number}`+testimonial.id}`} className='text-sky-700'>Read More</Link>)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
