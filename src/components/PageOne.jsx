import React from 'react'
import Video from '../assets/video.mp4'

export const PageOne = () => {
  return (
    <div className='md:-mt-28 lg:-mt-24'>
        <video src={Video}
        className='h-full w-full object-cover'
        autoPlay loop muted
        ></video>

        <div className='bg-gray-300/90 rounded rounded-md p-4 text-black w-52 -mt-32 ml-5 relative z-10 md:text-lg lg:text-5xl md:w-[40%]'>
            <h1>Everything at a glance: 
                Augmented Reality
                SAP and nonSAP solutions
            </h1>
        </div>

    </div>
  )
}

export default PageOne