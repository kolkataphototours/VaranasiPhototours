import React from 'react'
import GlassmorphicImage from './ImageComponent'
import pic from './assets/1.jpg'
import { Brick, Dhobi, Ganga, Ganges, Nagas, Sadhu, Mud, Streets } from './ImageData'


const ShootingSites = () => {
    return (
        <>
            <div>
                <h1 class="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-sang ">Shooting Sites</h1>
                <div className="flex flex-wrap justify-center">
                    <GlassmorphicImage path={"sadhu"} src={Sadhu[1].src} heading="Sadhu Boat Shoot" />
                    <GlassmorphicImage path={"ganga"} src={Ganga[3].src} heading="Ganga Aarti" />
                    <GlassmorphicImage path={"ganges"} src={Ganges[1].src} heading="Ganges Shore Line" />
                    <GlassmorphicImage path={"nagas"} src={Nagas[0].src} heading="Nagas and Aghoris" />
                    <GlassmorphicImage path={"streets"} src={Streets[0].src} heading="Streets and Lanes" />
                    <GlassmorphicImage path={"brick"} src={Brick[0].src} heading="Brick Factory" />
                    <GlassmorphicImage path={"dhobi"} src={Dhobi[3].src} heading="Dhobi Ghat" />
                    <GlassmorphicImage path={"mud"} src={Mud[0].src} heading="Mud Wrestling" />
                </div>
            </div>
            <div className="border-t-2 border-black w-3/4 mx-auto relative mt-12 mb-10 opacity-20 rounded"></div>
        </>
    )
}

export default ShootingSites