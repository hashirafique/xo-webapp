import React, {useState} from 'react'
import DemoModal from './DemoModal'

const DemoBtnThree = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <button onClick={()=> setOpenModal(true)} className='bg-white text-2xl px-5'>Kontakt</button>
                <DemoModal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  )
}

export default DemoBtnThree