import React from 'react'
import {CgClose} from 'react-icons/cg'

const ModalPage5Four = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='flex'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea laboriosam esse maxime commodi explicabo dolores aliquam expedita fugiat, vero aliquid labore architecto non, amet et hic reiciendis id provident eum.</p>
        <div onClick={onClose}><CgClose/> </div>
    </div>
  )
}

export default ModalPage5Four