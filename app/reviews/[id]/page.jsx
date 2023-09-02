import React from 'react'
import bg from '../../../components/Reviews/assets/bg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import TestimonialDetails1 from '@/components/Reviews/TestimonialDetail1'
import TestimonialDetails2 from '@/components/Reviews/TestimonialDetails2'
import TestimonialDetails3 from '@/data/reviews/testimonialDetails/1'
import reviewCardDetails from '@/components/Home/ReviewCardDetails'


const Peoples = ({ params }) => {
    const result = params.id;

    const number = parseInt(result.charAt(0), 10);
    const id = parseInt(result.slice(1), 10);
    let testimonialDetails = TestimonialDetails1; // Use let instead of const

    if (number === 1) {
        testimonialDetails = TestimonialDetails2; // Update the existing variable
    }
    if (number === 2) {
        testimonialDetails = TestimonialDetails3; // Update the existing variable
    }
    if(number === 3){
        testimonialDetails = reviewCardDetails
    }




    return (
        <div className=''>
            <div className=' flex flex-col ' >
                <div className='flex flex-col   justify-center items-center   h-2/3' >
                    <Image className=' object-cover   w-screen ' src={bg} style={{height:"450px"}} />
                    <div className=' absolute  flex flex-col gap-2 items-center h-fit'>
                        <Image className='h-20  w-20 lg:h-28 ml-2 lg:w-28 rounded-full cover' src={require(`../../../public/images/reviews/profile-image/${testimonialDetails[id].profilePic}.jpg`)} width={200} height={200} />
                        <p className='text-lg lg:text-xl text-white font-semibold font-sang  text-center '>{testimonialDetails[id].name}</p>
                        <p className='lg:text-lg font-medium text-white font-sang'>{testimonialDetails[id].place}</p>

                        <div className=' relative  text-center    flex justify-center'>
                            {testimonialDetails[id].instagram && (
                                <Link className='text-3xl mr-4' target='_blank' href={testimonialDetails[id].instagram}>
                                    <i className="fab fa-instagram text-white"></i>
                                </Link>
                            )}
                            {testimonialDetails[id].facebook && (
                                <Link className='text-3xl mr-4 text-white' target='_blank' href={testimonialDetails[id].facebook}>
                                    <i className="fab fa-facebook"></i>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>



            </div>
            <div className='my-12  flex flex-col items-center'>
                <div className='md:w-5/6 shadow-xl p-8  pb-16 border-b-2'>
                    <h1 className='text-3xl font-semibold mb-8 font-sang'>What does {testimonialDetails[id].gender} feels,</h1>
                    <p className='text-xl  font-ste'>{testimonialDetails[id].feeling}</p>
                    <p className='text-end text-lg font-semibold font-sang mt-4'>{testimonialDetails[id].name}</p>
                </div>
                


                    {testimonialDetails[id].pics[0] && (
                        <div className=' flex flex-col pb-8 text-center items-center   '>
                            <h1 className='text-2xl lg:text-3xl font-sang mt-12 mb-4    '>{testimonialDetails[id].nickname} Works in Varanasi </h1>
                            <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3  gap-8 w-max lg:w-fit  justify-items-center lg:py-4 text-center'>


                                {testimonialDetails[id].pics.map((url, index) => (
                                    <Image className='h-48 w-72 rounded shadow-xl' src={require(`../../../components/Reviews/assets/${url}`)} key={index} width={200} height={200} />
                                ))}



                            </div>
                        </div>
                    )
                    }

               
            </div>
        </div>
    )
}


export default Peoples
