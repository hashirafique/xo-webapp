import React, {useState} from 'react'
import DemoModal from './DemoModal'

const BookADemo = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
        <button onClick={()=> setOpenModal(true)} className='px-7 py-2 border-green-500 bg-white mt-1 rounded rounded-md text-md font-bold w-full hover:bg-gray-300 duration-300'>Book a Demo</button>
                <DemoModal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  )
}

export default BookADemo