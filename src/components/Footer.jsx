import React from 'react'
import Logo from '../assets/logo.png'
import Paypal from '../assets/paypal.png'
import Mastercard from '../assets/mastercard.png'
import American from '../assets/american-express.png'
import Visa from '../assets/visa.png'
import Fb from '../assets/facebook.png'
import Twitt from '../assets/twitter.png'
import Beh from '../assets/behance.png'
import Drib from '../assets/dribble.png'
import {AiOutlineRight} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='px-5 py-5'>
    <div className='mt-5 px-10 py-10 border-solid border-b-2'>

        <div className=''>
            <div className='w-1/3 flex flex-col'>
                <img src={Logo} alt="" className='w-1/6 '/>
                <p className='md:text-3xl font-semibold'>nxtBase Dynamics GmhB i.G. Kurfürstendamm 15 10715 Berlin https://www.nxtDynamics.de</p>
                <div className='flex'>
                  <img src={Paypal} alt="" className='w-1/12'/>
                  <img src={Mastercard} alt="" className='w-1/12' />
                  <img src={Visa} alt="" className='w-1/12'/>
                  <img src={American} alt="" className='w-1/12'/>

                </div>

            </div>
            <div className='w-1/3 flex flex-col justify-center'>
                <ul className='mt-10 md:text-3xl font-semibold'>
                <li className='py-2 flex items-center'><AiOutlineRight/>  Home</li>
                <li className='py-2 flex items-center'><AiOutlineRight/>  Über uns</li>
                <li className='py-2 flex items-center'><AiOutlineRight/>  Produkte</li>
                <li className='py-2 flex items-center'><AiOutlineRight/>  Team</li>
                </ul>
            </div>
            <div className='w-1/3 mt-7 flex flex-col justify-center'>

            <h1 className='font-bold md:text-3xl'>Contact Us</h1>
            <h1 className='font-semibold md:text-xl'>Call Us at +41 337 8954 232</h1>
            <div className='flex mt-5'>
              <img src={Fb} alt=""  className='w-1/12'/>
              <img src={Twitt} alt="" className='w-1/12'/>
              <img src={Beh} alt=""  className='w-1/12'/>
              <img src={Drib} alt="" className='w-1/12'/>
            </div>


            </div>
        </div>

    </div>

      <div className='flex justify-around'>
        <h1>All Rights Reserved 2022</h1>

      <ul className='flex space-evenly space-x-4'>
        <li>Help</li>
        <li>Terms & Conditions</li>
        <li>Privacy</li>
      </ul>

      </div>

    </div>
  )
}

export default Footer