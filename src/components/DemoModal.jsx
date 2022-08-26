import React from 'react'
import {CgClose} from 'react-icons/cg'
import Message from './Message'

const DemoModal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div>
    <div className='h-9/12 w-full md:w-9/12 lg:w-1/2 md:left-[25%] p-5 shadow-md rounded-md border-solid border-2 mt-2  bg-white absolute'>
        
        <form className='bg-white px-8 pt-6 pb-8 mb-4 w-full flex justify-center'>
            <h1 className='text-2xl font-bold uppercase'>Request your demo now</h1>
            <p className='text-xl font-md uppercase mt-5'>Fill out these requested fields and our sales team will contact you in 24 hours</p>
            <div className='mt-5'>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                E-mail*
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="xyz@abc.com"/>
            </div>
            <div class="mt-5">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Company Name*
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="company name"/>
      
    </div>
    <div class="mt-5">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="number">
        Phone Number
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="+1 865 *******"/>
      
    </div>

    <div class="mt-5">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
       Message*
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Message"/>
      
    </div>
    </form>
    <div><Message/></div>
    </div>
    
        
        <div onClick={onClose}><CgClose/></div>

        
        
    
    
    </div>
  )
}

export default DemoModal