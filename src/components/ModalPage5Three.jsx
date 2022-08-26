import React from 'react'
import {CgClose} from 'react-icons/cg'

const ModalPage5Three = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='flex'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, harum totam recusandae blanditiis eligendi iste odio, quibusdam adipisci dolorem excepturi alias mollitia facere aliquid. Iste quidem maiores architecto fugit ducimus?</p>
        <div onClick={onClose}><CgClose/> </div>
    </div>
  )
}

export default ModalPage5Three