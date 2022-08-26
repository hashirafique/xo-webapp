import React from 'react'
import PortraitOne from '../assets/Portrait1.png'
import PortraitTwo from '../assets/Portrait2.png'
import PortraitThree from '../assets/Portrait3.png'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const PageFour = () => {
  return (
    <div className='mt-14'>
         <h1 className='text-5xl text-gray-600 font-semibold md:font-bold ml-7'>TEAM</h1>
         <p className='ml-7 mt-3 text-2xl font-semibold uppercase'>Wir kennen die VR/AR/MR Branche und ihre Herausforderungen seit 2013.</p>
         <p className='text-xl mt-2 px-7 mb-10 md:text-2xl'>nxtDynamics ist der Spezialist für Anbindungen von VR/AR/MR Lösungen ans SAP und andere ERP/MES/WMS Systeme</p>
        
        
         <div className='bg-gray-300 w-full h-full md:flex md:flex-row flex flex-col md:space-x-10 lg:space-x-28 py-10 items-center justify-center'>

        <div className='w-full flex flex-col justify-center py-3 items-center bg-white rounded rounded-md md:w-1/6 py-10 '> 
         <img src={PortraitOne} alt="" className='w-1/3 h-1/3' />
         <h1 className='text-xl font-bold mt-3'>Patrick Wood</h1>
         <p className='text-xl font-semibold uppercase mt-3'>CEO/Founder</p>
         <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consectetur. Cupiditate odit distinctio laboriosam officia,</p>
         <div className='flex justify-around space-x-2'>
         <BsFacebook/>
        <BsInstagram/>
        <BsLinkedin/>
         </div>
        </div>

        <div className='w-full flex flex-col justify-center py-3 items-center bg-white rounded rounded-md md:w-1/6 py-10'> 
         <img src={PortraitTwo} alt="" className='w-1/3 h-1/3 ' />
         <h1 className='text-xl font-bold mt-3'>Deborra Amet</h1>
         <p className='text-xl font-semibold uppercase mt-3'>Front End Developer</p>
         <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consectetur. Cupiditate odit distinctio laboriosam officia,</p>
         <div className='flex justify-around space-x-2'>
         <BsFacebook/>
        <BsInstagram/>
        <BsLinkedin/>
         </div>
        </div>

        <div className='w-full flex flex-col justify-center py-3 items-center bg-white rounded rounded-md md:w-1/6 py-10'> 
         <img src={PortraitThree} alt="" className='w-1/3 h-1/3' />
         <h1 className='text-xl font-bold mt-3'>Mary Dunst</h1>
         <p className='text-xl font-semibold uppercase mt-3'>Web Designer</p>
         <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, consectetur. Cupiditate odit distinctio laboriosam officia,</p>
         <div className='flex justify-around space-x-2'>
         <BsFacebook/>
        <BsInstagram/>
        <BsLinkedin/>
         </div>
        </div>


         </div>
         <p className='text-xl mt-10 px-7 md:text-2xl'>Es gehört zu unserem Tagesgeschäft, mit unserem kompetenten und motivierten Team, individuelle SAP-Lösungen zu erarbeiten, zu entwickeln und produktiv zu setzen. Weltweit.</p>
    </div>
  )
}

export default PageFour