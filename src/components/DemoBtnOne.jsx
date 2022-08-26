import React, {useState} from 'react'
import DemoModal from './DemoModal'

const DemoBtnOne = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <button onClick={()=> setOpenModal(true)} className='bg-white text-2xl px-3 w-full'>Demo</button>
                <DemoModal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  )
}

export default DemoBtnOne