import React, {useState} from 'react' 
import MessageModal from './MessageModal'

const Message = () => {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
    <button onClick={()=> setOpenModal(true)} className='rounded-lg bg-gray-800 mt-1 text-lg text-white px-3 w-1/3'>Send Message</button>
    <MessageModal open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  )
}

export default Message