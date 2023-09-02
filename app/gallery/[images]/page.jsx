"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Brick, Dhobi, Ganga, Ganges, Nagas, Sadhu, Mud, Streets } from '../../../components/Home/ImageData'
import ImageGallery from '@/components/Gallery/ImageGallery';

const Images = ({ params }) => {

  const [modalImage, setModalImage] = useState(null);
  const [show, setShow] = useState(false)
  const [Images, setImages] = useState([]);

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
      <img className='h-5/6 object-cover' src={src} alt={`${alt}`} />

    </div>
    );
  };


  const handleImages = () => {
    if (params.images == 'brick') {
      setImages(Brick)
    }
    else if (params.images == 'dhobi') {
      setImages(Dhobi)
    }
    else if (params.images == 'ganga') {
      setImages(Ganga)
    }
    else if (params.images == 'ganges') {
      setImages(Ganges)
    }
    else if (params.images == 'nagas') {
      setImages(Nagas)
    }
    else if (params.images == 'sadhu') {
      setImages(Sadhu)
    }
    else if (params.images == 'mud') {
      setImages(Mud)
    }
    else if (params.images == 'streets') {
      setImages(Streets)
    }
  }

  useEffect(() => {
    handleImages(params)
  }, [])


  return (
    <>
   {!show && <div className="flex justify-center lg:mx-96 image-gallery-desktop">
    <ImageGallery handleImageClick={handleImageClick} className="" imageList={Images} />
    </div>}
    {!show && <div className="card-list">
    {Images.map((pic) => <div className="card cursor-pointer" onClick={() => handleImageClick(pic)}>
    <Image
    className="card-image object-cover"
    alt={`${pic.id}`}
    src={pic.src}
    width={500}
    height={500}
    ></Image>
    </div>)}
    </div> }
    <ImageModal src={modalImage?.src} alt={modalImage?.id} onClose={closeModal} />
    </>
  )
}

export default Images