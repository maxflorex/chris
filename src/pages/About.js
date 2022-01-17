import React from 'react'
import { ccLogoWhite } from '../images/index'
import { chrisPainting, cc1, cc2, cc3 } from '../images/index'

const About = () => {
    return (
        <div className='bg-slate-100'>


            <div className="bg-[url('/src/images/All/chris-painting-web.jpg')] bg-cover">
                <div className=' flex flex-col justify-center bg-slate-900 bg-opacity-60 backdrop-blur items-center  min-h-[33vh]'>
                    <h1 className="font-light tracking-widest text-xl uppercase text-white pb-2">
                        About
                    </h1>

                    <img
                        src={ccLogoWhite}
                        alt="Chris Logo"
                        className="lg:w-1/3 md:w-1/2 w-2/3"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <button className='btn -m-6 z-50'>Down</button>
            </div>
            <div className="xl:w-1/2 md:w-full mx-auto">
                <div className="container mx-auto py-16">
                    <div className='mx-4 md:mx-0'>


                        <div className="flex flex-cols py-4">
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                                <img src={cc1} alt="Chris C." className='rounded-lg place-self-center h-96 w-full bg-cover object-cover' />
                                <div>
                                    <h1 className='pt-4 md:pt-16 text-slate-900 text-center text-3xl font-light'>The Artists</h1>
                                    <p className='md:px-16 md:pb-16 p-4 text-slate-900 text-justify'>Chris Christian is a passionate supporter of Cayman’s thriving traditional and contemporary art scene. A gifted painter in his own right, Chris employs his experience and skills as the Art Director for The Galleries of The Ritz-Carlton, Grand Cayman</p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-cols py-4 flex-wrap-reverse items-center">
                            <div className=' basis-full md:basis-1/2'>
                                <h1 className='pt-4 md:pt-16 text-slate-900 text-center text-3xl font-light'>The Curator</h1>
                                <p className='md:px-16 md:pb-16 p-4 text-slate-900 text-justify'>The lush landscape, vibrant coast, rich seafaring culture and sheer luminescence of colour and light found within the Cayman Islands landscape has inspired many an artist to put pen, pencil and paintbrush to paper or canvas, creating a fantastic multi-dimensional artistic offering. Luckily, there are some great venues dotted around the island that give artists the opportunity to show off their work to the public.</p>
                            </div>
                            <img src={cc2} alt="Chris C." className='rounded-lg place-self-center basis-full md:basis-1/2 w-full bg-cover md:w-[50%] h-96 object-cover' />
                        </div>

                        <div className="flex flex-cols py-4">
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                                <img src={cc3} alt="Chris C." className='rounded-lg place-self-center h-96 w-full object-cover' />
                                <div>
                                    <h1 className='pt-4 md:pt-16 text-slate-900 text-center text-3xl font-light'>The Native Son</h1>
                                    <p className='md:px-16 md:pb-16 p-4 text-slate-900 text-justify'>His family has a rich seafaring heritage; his father, grandfather and uncles were often out to sea. Some of Christian’s fondest childhood memories are of swimming and fishing. The movement of the water – its graceful fluidity – often influences his acrylic paintings of Cayman’s traditions, such as his legendary “Bath Pan” series, illustrating a mother washing her young son in a large aluminium bath pan under a flowering shade tree. He particularly enjoys bringing to life memories of the early days in Cayman through modern painting techniques and colours, such as sepia</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
