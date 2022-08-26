import React, {useState} from 'react'

import Logo from '../assets/logo.png'
import PictureThree from '../assets/Picture3.png'

import ModalTwo from './ModalTwo'


import DemoBtnOne from './DemoBtnOne'


const NextFlow = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div> <div className=' w-full md:flex mt-5'>

    <div className='md:hidden w-full mt-14'>
        <img src={PictureThree} alt="" />
    </div>
        <div className='w-full md:w-6/12 bg-white flex flex-col justify-center'>
        <h1 className='text-5xl text-gray-600 font-semibold ml-5'>nxtFLOW</h1>
        <p className='text-3xl font-semibold uppercase ml-3 mt-5 md:w-1/2 ml-5'>Perfekte Workflows in laGer und Produktion.</p>
        <div className=''>
            <img src={Logo} alt="" className=' w-[12%] float-left mt-5 ml-5 pr-5'  />
            <p className='text-3xl mt-5 md:w-1/2 ml-5'>Wir verbinden Systemwelten: Lager und Produktion. „Ware zum Mann“ und das Anbinden des Haenel Leanlifts gehört zu unserem Portfolio.</p>
        </div>
        <div className='flex w-full mt-10 ml-5'>
            <div ><button onClick={()=> setOpenModal(true)} className='bg-blue-700 text-white text-2xl w-full px-10 py-3 hover:bg-blue-200 hover:text-black duration-300'>Mehr</button>
                <ModalTwo open={openModal} onClose={()=> setOpenModal(false)}/> </div>
            <div><DemoBtnOne/> </div>
        </div>

    </div>

    <div className='hidden md:block w-6/12 mt-14'>
        <img src={PictureThree} alt="" />
    </div>

</div></div>
  )
}

export default NextFlow