import React from 'react'
import Testimonial from '@/components/Reviews/Testimonal'
import TestimonialDetails3 from '@/data/reviews/testimonialDetails/1'

const MoreReviews = () => {
  return (
    <div>
     <h1 className='text-center text-4xl  font-sang mt-8 -mb-8'>Meet the Reviewers</h1>
      <Testimonial number={2} testimonialDetails={TestimonialDetails3} />
   
       
  
    </div>
  )
}

export default MoreReviews