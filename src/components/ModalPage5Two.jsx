import React from 'react'
import {CgClose} from 'react-icons/cg'

const ModalPage5Two  = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='flex'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut quidem, esse tempora voluptate repellendus laboriosam placeat. Cupiditate, minima, inventore, repudiandae vitae illo repellat autem sapiente deleniti sequi quibusdam eligendi!</p>
        <div onClick={onClose}><CgClose/> </div>
    </div>
  )
}

export default ModalPage5Two