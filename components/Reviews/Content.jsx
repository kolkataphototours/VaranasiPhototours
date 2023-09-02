import React from 'react'
import Image from 'next/image'

import headerPic from './assets/review-edit.jpg'
const ReviewsContent = () => {
  return (
    <div>

      <div className='p-4 rounded '>

        <div className=' text-center p-2 font-semibold tracking-wide font-sang bg-zinc-100 '>
          <p className='p-4'>"Our guests are the heros of our story and their reviews are our reality."</p>
          <div className='  md:w-4/5 '>

            <p className='flex justify-center md:justify-end p-x-4 '>- Shivam Pandey </p>
          </div>
        </div>
        <div className='text-center mt-8 mb-4'>

          <h1 className='text-4xl font-sang'>Meet the Reviewers</h1>
        </div>


      </div>

    </div>
  )
}

export default ReviewsContent