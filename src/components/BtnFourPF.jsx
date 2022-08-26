import React, {useState} from 'react'
import ModalPage5Four from './ModalPage5Four';

const  BtnFourPF = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
                    <div className='mt-10'>
                        <button  onClick={()=> setOpenModal(true)} className='bg-blue-500 px-2 flex justify-between w-full text-white text-lg p-3 hover:bg-blue-200 hover:text-black duration-300'><p>4. Can you explain what are the steps</p> </button>
                        <ModalPage5Four open={openModal} onClose={()=> setOpenModal(false)}/> 
                    </div>
    </div>
  )
}

export default BtnFourPF