import React, {useState} from 'react'
import ModalPage5Two from './ModalPage5Two';

const BtnTwoPF = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
                    <div className='mt-10'>
                        <button  onClick={()=> setOpenModal(true)} className='bg-blue-500 px-2 flex justify-between py-6 w-full text-white p-3 '><p> 2. Can you explain what are the steps</p><p>+</p></button>
                        <ModalPage5Two open={openModal} onClose={()=> setOpenModal(false)}/> 
                    </div>
    </div>
  )
}

export default BtnTwoPF