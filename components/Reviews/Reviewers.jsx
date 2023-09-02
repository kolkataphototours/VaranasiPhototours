import React from 'react'
import youtube2 from '@/data/reviews/youtube/2'

function Reviewers() {
    return (
        <div className=' flex flex-col items-center mb-8 '>
            {/* <h1 className='text-center text-3xl md:text-4xl font-sang  '>Meet The Reviewers</h1> */}

            <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-2   w-11/12 justify-items-center gap-8 rounded-lg  p-8'>

               
                {youtube2.map((reviewer, index) => (
                    <div className='w-11/12' key={index}>
                        <iframe className="w-full h-56 md:h-80 rounded-lg" src={`${reviewer.url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Reviewers