"use client"
import AnimatedNumber from "animated-number-react";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const HomePage = () => {

    const [visible, setVisible] = useState(false)


    return (
        <ScrollTrigger onEnter={()=>setVisible(true)} onExit={()=>setVisible(false)}>
            <div className=" mb-10 py-8 bg-gray-500">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl text-center mb-8 font-sang text-white">Our Works In A Nutshell</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-ste">
                        <div className="bg-white rounded-lg p-4 shadow-md text-center flex justify-around items-center">
                            <div>
                                <i className="fa fa-camera text-3xl text-center text-slate-600"></i>
                            </div>
                            <div className="">
                               {visible && <p className="text-center text-4xl"><AnimatedNumber
                                    value="120"
                                    formatValue={(value) => value.toFixed(0)}
                                    duration="2000"
                                /></p>}
                                <p className="text-center font-bold text-lg mb-2">Worked with Photographers</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-md text-center flex justify-around items-center">
                            <div>
                                <i className="fa fa-video text-3xl text-center text-slate-700"></i>
                            </div>
                            <div className="">
                              {visible &&  <p className="text-center text-4xl"><AnimatedNumber
                                    value="40"
                                    formatValue={(value) => value.toFixed(0)}
                                    duration="2000"
                                /></p>}
                                <p className="text-center font-bold text-lg mb-2">Worked with Filmmakers</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-md text-center flex justify-around items-center">
                            <div>
                                <i className="fa fa-user-shield text-3xl text-center text-slate-700"></i>
                            </div>
                            <div className="">
                                {visible && <p className="text-center text-4xl"><AnimatedNumber
                                    value="60"
                                    formatValue={(value) => value.toFixed(0)}
                                    duration="2000"
                                /></p>}
                                <p className="text-center font-bold text-lg mb-2">Successfully Fixed Projects</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-md text-center flex justify-around items-center">
                            <div>
                                <i className="fa fa-globe text-3xl text-center text-slate-700"></i>

                            </div>
                            <div className="">
                              {visible &&  <p className="text-center text-4xl"><AnimatedNumber
                                    value="30"
                                    formatValue={(value) => value.toFixed(0)}
                                    duration="2000"
                                /></p>}
                                <p className="text-center font-bold text-lg mb-2">Successful Workshops</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default HomePage;
