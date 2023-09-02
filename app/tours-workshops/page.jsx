"use client"
import React from 'react'
import Carousel from '../../components/Tours/Carousel'
import ToursAndWorkShops from '@/components/Home/ToursAndWorkShops'
import { Home } from '@/components/Tours/Data'



const Tours = () => {
  return (
    <>
      <Carousel data={Home.carousel} heading={Home.heading} />
      <br />
      <br />
      <ToursAndWorkShops />
    </>
  );
}

export default Tours