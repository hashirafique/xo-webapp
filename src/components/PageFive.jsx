import React  from 'react'
import PictureSix from '../assets/Picture6.png'
import BtnFourPF from './BtnFourPF'
import BtnOnePF from './BtnOnePF'
import BtnThreePF from './BtnThreePF'
import BtnTwoPF from './BtnTwoPF'


const PageFive = () => {

  return (
    <div className='mt-14'>

        <h1 className='text-5xl text-gray-600 font-bold px-10'>Q&A</h1>
        <div className='md:flex w-full bg-gray-100 mt-10 px-10'>
        <img src={PictureSix} alt="" className='w-full md:hidden'/> 
            <div className='w-full md:w-1/2 flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold uppercase text-blue-900 md:text-5xl mt-5'>Frequently Asked Questions</h1>
                <p className='text-sm md:text-2xl mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur harum modi reiciendis eveniet. Hic error repellendus</p>
                <div className='w-full mt-10'>
                   
                   <div><BtnOnePF /></div> 

                    <div className=''>
                    <BtnTwoPF/>
                    </div>

                    <div className=''>
                    <BtnThreePF/> 
                    </div>

                    <div className=''>
                    <BtnFourPF/>
                         
                    </div>
                </div>
            </div>
            <img src={PictureSix} alt="" className='w-1/2 hidden md:block'/>
        </div>
        <div className='bg-gray-300  py-14 md:py-24 lg:py-40'>
            <h1 className='text-5xl px-10 text-gray-600 font-bold mt-10'>Sind Sie bereit für Augmented Reality?</h1>
            <p className='text-2xl px-10 font-semibold uppercase mt-10'>Wir helfen IhnEN, Ihr Unternehmen mit unseren Lösungen zu revolutionieren.</p>
            <div className='w-1/2 mt-10 ml-10'>
            <button className='bg-blue-700 text-white text-2xl outline-4 w-2/12'>Mehr</button>
            <button className='bg-white  text-2xl w-2/12'>Kontakt</button>
            </div>
        </div>

    </div>
  )
}

export default PageFive