import React from 'react'
import TopCarousel from '../components/Home/Crousel'
import Tagline from '@/components/Home/Tagline'
import ShootingSites from '@/components/Home/ShootingSites'
import About from '@/components/Home/About'
import HomeReviewers from '@/components/Home/HomeReviewers'
import reviewCardDetails from '@/components/Home/ReviewCardDetails'
import Testimonial from '@/components/Reviews/Testimonal'
import Speciality from '@/components/Home/Speciality'
import NumberCounter from '@/components/Home/NumberCounter'
import Link from 'next/link'

const Home = () => {
  return (
    <>
    <TopCarousel />
    <Tagline />
    <ShootingSites />
    <Speciality/>
    <About />
    <HomeReviewers />
    <Testimonial number={3} testimonialDetails={reviewCardDetails} />
    <div className='text-center text-lg  -mt-8 mb-8 mr-8 font-sang font-semibold'><Link className='w-max shadow-md border-b-2 p-2' href={'/reviews/moreReviews'}>Read More Reviews</Link></div>
    <NumberCounter />

    </>
  )
}

export default Home