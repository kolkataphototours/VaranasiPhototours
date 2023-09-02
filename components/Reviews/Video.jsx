import React from 'react'
import youtube1 from '@/data/reviews/youtube/1'
function Video() {
    return (

        <div className="flex  justify-center h-[300px] sm:h-[500px] md:h-screen">
            <iframe
                className="w-11/12 h-full rounded-lg"
                src={`${youtube1.url}?rel=0`} 
                title="YouTube Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>

           
        </div>

    )
}

export default Video

