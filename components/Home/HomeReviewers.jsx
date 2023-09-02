import React from 'react'
import youtube1 from '@/data/home/youtube/1'

function HomeReviewers() {
    return (
        <div className=' flex flex-col items-center mb-8 '>
            <h1 className='text-center text-3xl md:text-4xl font-sang  '>Meet The Reviewers</h1>

            <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-1 w-full  md:w-2/3 justify-items-center gap-8 rounded-lg  p-8'>

                    <div className='w-full' >
                        <iframe className="w-full h-[350px] md:h-[500px] rounded-lg" src={`${youtube1.url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
               

            </div>
        </div>
    )
}

export default HomeReviewers