import React, {useState} from 'react'
import DemoModal from './DemoModal'

const DemoBtnThree = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <button onClick={()=> setOpenModal(true)} className='border-solid border-2 border-green-500 bg-white mt-1 text-2xl px-3'>Kontakt</button>
                <DemoModal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  )
}

export default DemoBtnThree