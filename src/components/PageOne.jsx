import React from 'react'
import Video from '../assets/video.mp4'

export const PageOne = () => {
  return (
    <div className='-mt-24'>
        <video src={Video}
        className='h-full w-full object-cover'
        autoPlay loop muted
        ></video>

        <div className='bg-gray-300 p-4 text-black w-52 -mt-32 ml-5 relative z-10 md:text-lg lg:text-xl md:w-80'>
            <h1>Everything at a glance: 
                Augmented Reality
                SAP and nonSAP solutions
            </h1>
        </div>

    </div>
  )
}

export default PageOne