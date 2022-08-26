import React from 'react'
import {CgClose} from 'react-icons/cg'
import PictureSeven from '../assets/Picture7.png'

const MessageModal = ({open, onClose}) => {
    if(!open) return null
  return (

    <div className='w-screen h-screen absolute bg-white top-0 left-0'>
    <div className='absolute bg-white flex'>
        <img src={PictureSeven} alt="" />
    <div onClick={onClose}><CgClose/></div>
    </div></div>
  )
}

export default MessageModal