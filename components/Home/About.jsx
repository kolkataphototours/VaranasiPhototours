import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <h1 class="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-sang ">About</h1>
            <p className="text-center md:w-2/3 mx-auto font-sang p-10 text-base md:text-xl"> Over the last five years, we have worked with over 200 photographers and filmmakers In Varanasi and across India. With our experience and
                uniqueness, we guarantee you will fly back home with photos to cherish
                for a Lifetime.<p> <Link className='text-cyan-700' href='/about'>Read More...</Link> </p>
            </p>
            <div className="border-t-2 border-black w-3/4 mx-auto relative mb-10 opacity-20 rounded"></div>
        </div>
    )
}

export default About