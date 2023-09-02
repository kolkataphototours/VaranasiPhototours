"use client"
import React,{useState} from 'react'
import { GalleryImages } from '@/components/Gallery/data'
import Image from 'next/image'
import ImageGallery from '@/components/Gallery/ImageGallery'


const Gallery = () => {


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

  const [modalImage, setModalImage] = useState(null);
  const [show, setShow] = useState(false)
  const [Images, setImages] = useState([]);

  return (
    <>
      {!show && <div className="flex justify-center  image-gallery-desktop">
        <ImageGallery handleImageClick={handleImageClick} className="" imageList={GalleryImages} />
      </div>}
      {!show && <div className="card-list">
        {GalleryImages.map((pic) => <div className="card cursor-pointer" onClick={() => handleImageClick(pic)}>
          <Image
            className="card-image object-cover"
            alt={`${pic.id}`}
            src={pic.src}
            width={500}
            height={500}
          ></Image>
        </div>)}
      </div>}
      <ImageModal src={modalImage?.src} alt={modalImage?.id} onClose={closeModal} />
    </>
  )
}

export default Gallery