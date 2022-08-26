import React, {useState} from 'react'
import DemoModal from './DemoModal'

const DemoBtnTwo = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <button onClick={()=> setOpenModal(true)} className='border-solid border-2 border-green-500 bg-white mt-1 text-2xl w-full px-3'>Demo</button>
                <DemoModal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  )
}

export default DemoBtnTwo