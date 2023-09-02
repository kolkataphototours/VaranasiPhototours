"use client"
import React from 'react'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import shivamPic from '../../public/images/about/shivam-profile-picture.jpg'
import shubhamPic from '../../public/images/about/shubham-profile-picture.jpg'
import youtube1 from '@/data/about/youtube/1';
import youtube2 from '@/data/about/youtube/2';
import shivamLink from '@/data/about/socialMedia/shivam';
import shubhamLink from '@/data/about/socialMedia/shubham';
import aboutHeader from './assets/aboutHeader.jpg'

const Content = () => {
  return (
    <div>
      <div className=' text-center p-2 font-semibold tracking-wide font-ste bg-zinc-100 mt-4 '>
        <p className='p-4'>"It is one thing to photograph people. It is
          another to make others care about them by
          revealing the core of their</p>
        <p className="tracking-widest ">HUMANESS."</p>

        <span className=" md:ml-60 lg:ml-80 mt-8"><em> - Paul Strand</em></span>

      </div>
      <div className='mb-8 lg:h-screen w-full mt-8 '>
        <div className=' relative h-1/2 md:h-5/6 text-center  flex  items-center  justify-center '>
          <Image className='h-full w-full ' src={aboutHeader} alt="Your Image" />
          <div className=' absolute  font-sang text-white font-bold text-lg md:text-3xl lg:text-4xl'>
            This is our story
          </div>
        </div>
      </div>


      <div className='mb-8 lg:-mt-28  flex text-center justify-center'>
        <p className='mx-2 md:m-4  p-8 rounded-lg drop-shadow-xl bg-slate-50 font-medium leading-relaxed   md:font-semibold  w-full md:w-2/3 tracking-wide text-sm md:text-lg font-ste'>

          Our early childhood was spent in the holy city of Varanasi, which is also our
          birthplace. However, we eventually moved to Kolkata, famously known as the
          ‘City of Joy’, in search of better opportunities. It didn't take long for us to fall in
          love with Kolkata city's vibrant culture. During our teenage years, we spend a
          lot of our time in our native city Varanasi and developed a keen interest in
          photography. Shivam pursued photography professionally, while Shubham
          enjoyed exploring the city and communicating, which helped Shivam in
          capturing great photos. Eventually, we decided to establish our first photo tour
          company, <Link className='text-blue-800' href='https://www.kolkataphototours.com/' target='_blank'>kolkataphototours.com</Link> . Over the last five years, we have
          collaborated with more than 200 photographers and filmmakers. Furthermore,
          we have expanded our photography tour services to cover various
          destinations throughout India. We guarantee a memorable photo tour
          experience in India with us.
        </p>

      </div>

      <div className=' w-full   flex justify-center my-12  '>
        <div className='grid lg:grid-cols-3 w-screen  my-8  lg:w-11/12 gap-0  shadow-2xl rounded-lg	 lg:rounded' >
          <div className="h-80 lg:h-full w-max lg:w-11/12 relative">
            <Image className="h-80 lg:h-full w-screen object-cover" src={shivamPic} alt="pic" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-black bg-opacity-50 flex items-center justify-around">
              <Link href={shivamLink.Facebook} target="_blank">
                <i className="fa fa-facebook icon text-white text-2xl hover:text-[#1877F2]" />
              </Link>
              <Link href={shivamLink.Website} target="_blank">
                <i className="fa fa-whatsapp icon text-white text-2xl hover:text-[#25D366]" />
              </Link>
              <Link href={shivamLink.Behance} target="_blank">
                <i className="fa fa-behance icon text-white text-2xl hover:text-[#1769FF]" />
              </Link>
              <Link href={shivamLink.Instagram} target="_blank">
                <i className="fa fa-instagram icon text-white text-2xl hover:text-[#E4405F]" />
              </Link>
              <Link href={shivamLink.Youtube} target="_blank">
                <i className="fa fa-youtube icon text-white text-2xl hover:text-[#FF0000]" />
              </Link>
            </div>
          </div>
          <div className='col-span-2 m-2 lg:m-8  tracking-wide '>
            <h1 className='text-center text-3xl font-semibold mt-4 font-sang'>Meet Shivam Pandey </h1>
            <p className='m-3 text-left md:p-4 font-sang text-base md:text-xl'>Introducing Shivam Pandey, a devoted photographer currently residing in Kolkata, a lively and
              vibrant city in India. Shivam is an inquisitive and daring individual who takes pleasure in
              discovering novel locations, immersing himself in diverse cultures, and seizing the essence of
              people's existence through his camera. Despite being brought up in a traditional society that
              discouraged pursuing one's passion as a viable option for a flourishing future, Shivam chose to
              follow his instincts and pursue his ardour for photography. Although he didn't have any formal
              education in photography, he was fortunate to work with some of the industry's finest
              professionals, which honed his abilities and refined his artistic perspective
              <br />
              <br />
              With a natural talent for narration and a profound affection for capturing genuine moments,
              Shivam's photography reflects his adventurous spirit and his capacity to connect with people
              from all walks of life. As a photography tour leader, he relishes sharing his knowledge and
              techniques with other aspiring photographers, urging them to embrace their creativity and
              pursue their dreams, just like he did.</p>
          </div>
        </div>
      </div>
      <div className=' w-full   flex  justify-center lg:mb-8 '>
        <div className='flex flex-col-reverse lg:grid  lg:grid-cols-3 w-screen   lg:w-11/12 gap-0  shadow-2xl 	 lg:rounded' >

          <div className='col-span-2 m-2 lg:m-8  tracking-wide '>
            <h1 className='text-center text-3xl font-semibold mt-4 font-sang '>Meet Shubham Pandey </h1>
            <p className='m-3 text-left md:p-4 font-sang text-base md:text-xl'>Introducing Shubham Pandey, a dynamic and gifted young communicator,
              and aspiring documentary filmmaker renowned for his ability to connect
              with individuals from different nationalities and make their Indian
              experience a memorable one. Shubham's love for visual storytelling is
              boundless, and he exhibits exceptional creativity in content curation and his
              passion for documenting stories has a long track. As a seasoned
              photography tour guide and Filming fixer since the inception of our first
              company, he possesses the skills and expertise necessary to guide visitors
              from every corner of the world. Shubham has collaborated and worked with
              numerous global brands dedicating himself to his passion for promoting fair
              trade organisations and NGOs from all around the world. With his
              distinctive perspective and sharp attention to detail, Shubham is certain
              that he will make you capture the essence of any subject and tell its story
              through the lens of your camera.</p>
          </div>
          <div className="h-80 lg:h-full w-max lg:w-11/12 relative">
            <Image className="h-80 lg:h-full w-screen object-cover" src={shubhamPic} alt="pic" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-black bg-opacity-50 flex items-center justify-around">
              <Link href={shubhamLink.Facebook} target="_blank">
                <i className="fa fa-facebook icon text-white text-2xl hover:text-[#1877F2]" />
              </Link>
              <Link href={shubhamLink.Website} target="_blank">
                <i className="fa fa-whatsapp icon text-white text-2xl hover:text-[#25D366]" />
              </Link>
              <Link href={shubhamLink.Behance} target="_blank">
                <i className="fa fa-behance icon text-white text-2xl hover:text-[#1769FF]" />
              </Link>
              <Link href={shubhamLink.Instagram} target="_blank">
                <i className="fa fa-instagram icon text-white text-2xl hover:text-[#E4405F]" />
              </Link>
              <Link href={shubhamLink.Youtube} target="_blank">
                <i className="fa fa-youtube icon text-white text-2xl hover:text-[#FF0000]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=' flex flex-col items-center my-8 '>


        <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-2   w-11/12 justify-items-center gap-8 rounded-lg  md:p-8'>


          <div className='w-11/12'>
            <iframe className="w-full h-56 md:h-80 rounded-lg"  src={`${youtube1.url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className='w-11/12'>
            <iframe className="w-full h-56 md:h-80 rounded-lg" src={`${youtube2.url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>


        </div>
      </div>

    </div>


  )
}

export default Content