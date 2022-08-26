import React from 'react'
import {CgClose} from 'react-icons/cg'

const ModalPage5One = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='flex'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptas hic quibusdam maxime, dolores, consequuntur commodi, quis culpa temporibus officia perspiciatis? Veniam quam aut magnam vitae omnis sit, incidunt deserunt!</p>
        <div onClick={onClose}><CgClose/> </div>
    </div>
  )
}

export default ModalPage5One