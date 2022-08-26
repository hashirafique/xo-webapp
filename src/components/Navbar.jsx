import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import BookADemo from './BookADemo'


export const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div>
    <div className=''>
    <div className='flex justify-between items-center w-full h-auto bg-black px-3 py-2 z-20 relative'>

    <div className='w-1/3'>
        <img src={Logo} alt="" className='h-[12%] w-[12%]' />
    </div>

    <ul className='md:flex justify-between text-white w-6/12 mr-20 hidden ' >
        <li className='hover:text-gray-500 duration-300'>Home</li>
        <li className='hover:text-gray-500 duration-300'>Über uns</li>
        <li className='hover:text-gray-500 duration-300'>Produkte</li>
        <li className='hover:text-gray-500 duration-300'>Team</li>
    </ul>
   <div className='mr-10'><BookADemo/></div>
   
   <button onClick={handleNav}  className='h-4/6 p-3 rounded-full z-40 relative'>
       {nav ? <CgClose/> :  <GiHamburgerMenu className='fill-white' />}
       
    </button>

    <div onClick={handleNav} className={nav? 'w-full h-[100vh] absolute left-0 top-0 bg-gray-100/90 px-4 py-7 flex flex-col block items-center justify-center z-30' : 'absolute left-[-100%] hidden h-[100vh]'}>
      <h1 className='text-5xl text-black font-bold '>
        Saasio
      </h1>
      <p className='text-2xl font-semibold uppercase mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis laboriosam natus culpa. Vitae, error in, unde quas alias facilis sed officiis ipsum nisi modi eaque! Eaque aperiam laudantium blanditiis ab.</p>
      <h1 className='text-5xl text-black font-md mt-5'>Follow Us On</h1>
      <div className='flex justify-around space-x-20 mt-5'>
        <BsFacebook/>
        <BsInstagram/>
        <BsLinkedin/>
      </div>
    </div>

   
    </div>

    </div>
    </div>
  )
}

export default Navbar