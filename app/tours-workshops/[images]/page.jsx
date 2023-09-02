"use client"
import React, { useEffect, useState } from 'react'
import Carousel from '@/components/Tours/Carousel'
import { PhotoTours, WorkShops, Customized, Fixers } from '@/components/Tours/Data'
import Image from 'next/image'
import ImageGallery from '@/components/Gallery/ImageGallery'
import ToursVideos from '@/components/Tours/ToursVideos'
import Modal from "react-bootstrap/Modal";

const ToursDynamicPage = ({ params }) => {

  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [show, setShow] = useState(false)


  const handleData = () => {
    if (params.images == 'photo-tours') {
      setData(PhotoTours)
    }
    else if (params.images == 'workshops') {
      setData(WorkShops)
    }
    else if (params.images == 'customized') {
      setData(Customized)
    }
    else if (params.images == 'fixers') {
      setData(Fixers)
    }

  }

  const handleImageClick = (pic) => {
    window.scrollTo(0, 0);
    setModalImage(pic);
    setShow(true)
  };

  const closeModal = () => {
    setShow(false)
    window.scrollTo(0, 0);
  };

  const ImageModal = ({ src, alt, onClose }) => {
    return (<div
      style={{ display: show ? 'flex' : 'none' }}
      className='bg-white shadow-2xl h-[400px] md:h-[600px] w-5/6 md:w-1/2 mx-auto p-2 my-3 flex-col justify-center items-center'
    >
      <div className="text-2xl relative -right-[44%] -top-[4%] fa fa-close cursor-pointer" onClick={() => onClose()}></div>
      <Image height={800} width={800} className='h-5/6 object-cover' src={src} alt={`${alt}`} />

    </div>
    );
  };

  useEffect(() => {
    handleData();
  }, [params.images])

  const handleReadMore = () => {
    setExpanded(true);
  };

  return (
    <>
      {!show && <div>
        <Carousel data={data?.carousel} heading={data?.heading} />
        <div className="px-4 py-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mt-5 font-sang">{data?.heading}</h2>
          <div className={`${expanded ? '' : 'overflow-hidden'} md:w-10/12 mx-auto`}>
            <h3 style={{ whiteSpace: 'pre-line' }} className="text-gray-600 text-base md:text-xl font-ste">
              {expanded ? data?.longContent : `${data?.shortContent}...`}
            </h3>
            {!expanded && (
              <div className="flex justify-end">
                <button
                  onClick={handleReadMore}
                  className="mt-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
                >
                  Read More
                </button>
              </div>
            )}
          </div>
          <div className='image-gallery-desktop mt-5'>
            <ImageGallery handleImageClick={handleImageClick} imageList={data?.Images} />
          </div>
          <div className="card-list">
            {data.Images && data?.Images.map((pic) => <div className="card cursor-pointer" key={pic.id} onClick={() => handleImageClick(pic)}>
              <Image
                className="card-image mt-5 object-cover"
                alt={`${pic.id}`}
                src={pic.src}
                width={500}
                height={500}
              />
            </div>)}
          </div>
          <ToursVideos videos={data?.videos} />

        </div>
      </div>
      }
      <ImageModal src={modalImage?.src} alt={modalImage?.id} onClose={closeModal} />
    </>
  )
}

export default ToursDynamicPage