import React from 'react'
import PictureFive from '../assets/Picture5.png'
import Logo from '../assets/logo.png'

const PageThree = () => {
  return (
    <div>
        
    <div className='flex flex-col justify-center items-center md:flex-row px-10 mt-3'>

        <div className='w-full md:w-1/3'>
        <h1 className='text-5xl text-gray-600 font-semibold md:font-bold'>BENEFITS</h1>
        <p className='text-2xl font-semibold uppercase md:text-4xl'>WIR NENNEN ES WIOTTA</p>
        <p className='text-xl mt-5 md:text-3xl'>Unsere Plattform kombiniert Augmented Reality, Künstliche Intelligenz und IIoT Visualisierungen.</p>
        </div>

        <div className='w-full md:w-1/3 mt-10 md:ml-10'>
            <img src={PictureFive} alt="" />
        </div>
        
        <div className='w-full md:w-1/3 mt-5'>
            <p className='text-xl mt-5 md:text-3xl'>Diese innovativen Funktionen reduzieren die kognitive Belastung der Mitarbeiter, automatisieren die Ausbildung am Arbeitsplatz und fördern betriebliche Erkenntnisse. </p>
        </div>

    </div>

    <div className='flex mt-3 px-5'>

        <div className='w-1/2 px-2'>
            <div className='flex items-center'>
            <img src={Logo} alt="" className='w-1/6 h-1/6 mt-10'/>
            <h1 className='text-5xl font-bold ml-10'>50%</h1>
            </div>
            <p className='md:text-2xl mt-5 md:w-1/2'>Mittels Augmented Reality Gelerntes wird besser 50% behalten und hat 40% weniger Unterrichtszeit gebraucht.</p>
        </div>

        <div className='w-1/2 px-2'>
            <div className='flex items-center'>
            <img src={Logo} alt="" className='w-1/6 h-1/6 mt-10'/>
            <h1 className='text-5xl font-bold ml-10'>83%</h1>
            </div>
            <p className='md:text-2xl mt-5 md:w-1/2'>Verringerung der Schulungszeit. Dreistündigen Unterrichtsplan können auf weniger als 30 Minuten verkürzt werden.</p>
        </div>

    </div>

    </div>
  )
}

export default PageThree