
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import reviewCardDetails from './ReviewCardDetails';


function Reviewcard() {
  return (
    <div className='flex h-fit justify-center overflow-hidden'>
      <div className='flex flex-col items-center  text-center rounded-2xl shadow-md my-16'>
        <div className='p-8 lg:p-8 grid lg:grid-cols-3 items-center -mt-4 justify-items-center'>
          {/* Map over the testimonials array */}
          {reviewCardDetails.map((testimonial, index) => (
            <div
              key={index}
              className='flex flex-col text-center items-center rounded-3xl w-80 p-4 shadow-2xl m-8 lg:m-4 xl:m-8 '
            >
              <Image src={require(`../Reviews/assets/profile-image/${testimonial.profilePic}`)} alt='pic' className='h-16 w-16 rounded-full' width={200} height={200} />
              <h2 className='my-1 font-sang font-semibold text-base tracking-wider md:text-lg'>{testimonial.name}</h2>
              <Link href={testimonial.link} className='text-lg mb-4 text-sky-700 font-medium tracking-wide font-ste'>
                {testimonial.username}
              </Link>
              <div className='h-0.5 w-full my-2 bg-black opacity-5'></div>
              <p className='font-medium font-ste text-base md:text-lg mt-2 p-2'>{testimonial.text} (<Link href={`/reviews/${testimonial.id}`} className='text-sky-700'>Read More</Link>)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviewcard;
