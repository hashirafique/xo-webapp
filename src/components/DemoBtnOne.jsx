import React, {useState} from 'react'
import DemoModal from './DemoModal'

const DemoBtnOne = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <button onClick={()=> setOpenModal(true)} className='bg-gray-300 text-2xl px-5 w-full px-10 py-3 hover:bg-white duration-300'>Demo</button>
                <DemoModal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  )
}

export default DemoBtnOne