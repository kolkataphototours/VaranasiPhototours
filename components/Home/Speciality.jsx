import React from 'react'

const Speciality = () => {
    return (
        <div className=' flex flex-col items-center my-12 bg-gray-50 shadow-md'>
            <h1 className='text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-sang mt-8 mb-4'>What Makes Us Special?</h1>
            <div className='flex flex-col md:flex-row tracking-wider w-11/12 gap-4 font-ste md:p-4'>
                <div className='bg-white rounded shadow-lg p-2 md:p-4 mb-8'>
                    <div className='text-center text-2xl'>
                        <i className="fa fa-camera"></i>
                    </div>
                    <h1 className='text-center text-xl lg:text-2xl mb-2 md:mb-4 '>For Photographers</h1>
                    <p>From the outset, we have always understood that a photographer's needs can only be truly comprehended by another photographer. Our extensive experience and profound understanding of the obstacles encountered in travel photography in India allow us to transform this understanding into a reality. Our goal is to provide unwavering support, ensuring that you can completely focus on capturing the perfect shots.</p>
                </div>
                <div className='bg-white rounded shadow-lg p-2 md:p-4 mb-8'>
                    <div className='text-center text-2xl'>
                    <i class="fa fa-regular fa-image"></i>
                    </div>
                    <h1 className='text-center text-xl lg:text-2xl mb-2 md:mb-4 '>By Photographers</h1>
                    <p>As a collective of artists, we are committed to delivering exceptional services to our fellow foreign photographers. We transcend the conventional role of guides and embrace the identity of modern hospitality ambassadors. Drawing from our own experiences as photographers, we possess an innate understanding of your needs, allowing us to effortlessly meet and exceed your expectations. Our dedication to providing a service that is unparalleled sets us apart from the rest.</p>
                </div>
            </div>
        </div>
    )
}


export default Speciality