import React, {useState} from 'react'
import ModalPage5Three from './ModalPage5Three';

const BtnThreePF = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div>
                    <div className='mt-10'>
                        <button  onClick={()=> setOpenModal(true)} className='bg-blue-500 px-2 flex justify-between py-6 w-full text-white p-3'><p>3. Can you explain what are the steps</p> <p>+</p> </button>
                        <ModalPage5Three open={openModal} onClose={()=> setOpenModal(false)}/> 
                    </div>
    </div>
  )
}

export default BtnThreePF