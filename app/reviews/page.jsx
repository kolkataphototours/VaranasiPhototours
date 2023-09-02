import React from 'react'
import ReviewsContent from '../../components/Reviews/Content'
import Testimonal from '@/components/Reviews/Testimonal'
import Video from '@/components/Reviews/Video'
import Reviewers from '@/components/Reviews/Reviewers'
import TestimonialDetails1 from '@/components/Reviews/TestimonialDetail1'
import TestimonialDetails2 from '@/components/Reviews/TestimonialDetails2'
import Link from 'next/link'
const Reviews = () => {
  return (
    <div>
      <ReviewsContent/>
      <Video/>
      <Testimonal number={0} testimonialDetails={TestimonialDetails1} />
      <Reviewers/>
      <Testimonal number={[1]} testimonialDetails={TestimonialDetails2} />
     <div className='text-center text-lg  -mt-8 mb-8 mr-8 font-sang font-semibold'><Link className='w-max shadow-md border-b-2 p-2' href={'/reviews/moreReviews'}>Read More Reviews</Link></div>
       
  
    </div>
  )
}

export default Reviews