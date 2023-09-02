import React from 'react'


function ToursVideos({ videos }) {
    console.log(videos);
    const vid = videos?.length;
    console.log(vid);
    return (
        <div className='mt-12'>
            {vid === 3 && (
                <div>
                    <div className=' flex flex-col items-center mb-8 '>


                        <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-1 w-full  md:w-2/3 justify-items-center gap-8 rounded-lg  p-8'>



                            <div className='w-full' >
                                <iframe className="w-full h-[300px] md:h-[500px] rounded-lg" src={`${videos[0].url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>


                        </div>
                    </div>
                    <div className=' flex flex-col items-center mb-8 '>


                        <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-2 w-full sm:w-11/12 justify-items-center gap-8 rounded-lg  p-8'>



                            <div className='w-full sm:w-11/12' >
                                <iframe className="w-full h-56 md:h-80 rounded-lg" src={`${videos[0].url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className='w-full sm:w-11/12'>
                                <iframe className="w-full h-56 md:h-80 rounded-lg" src={`${videos[1].url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>


                        </div>
                    </div>
                </div>

            )}
            {vid === 2 && (
                <div className=' flex flex-col items-center mb-8 '>


                    <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-2  w-full sm:w-11/12 justify-items-center gap-8 rounded-lg  p-8'>



                        <div className='w-full sm:w-11/12' >
                            <iframe className="w-full h-56 md:h-80 rounded-lg" src={`${videos[0].url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className='w-full sm:w-11/12' >
                            <iframe className="w-full h-56 md:h-80 rounded-lg" src={`${videos[1].url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>


                    </div>
                </div>
            )}
            {vid === 1 && (
                <div className=' flex flex-col items-center mb-8 '>


                    <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-1 w-full  md:w-2/3 justify-items-center gap-8 rounded-lg  p-8'>



                        <div className='w-full' >
                            <iframe className="w-full h-[350px] md:h-[500px] rounded-lg" src={`${videos[0].url}?rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>


                    </div>
                </div>
            )}

        </div>
    )
}

export default ToursVideos