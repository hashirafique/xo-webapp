import React from 'react'
import {CgClose} from 'react-icons/cg'

const ModalTwo = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='h-9/12 w-1/2 left-[25%] -mt-[20%] p-5 shadow-md rounded-md border-solid border-2 mt-2 flex justify-center bg-white absolute'>
        
        <div className=''>
        <h1 className='text-5xl text-gray-600 font-bold ml-7'>Mehr nxtFlow</h1>
        <p className='mt-2'>Bei allen Prozessen, die eine Checkliste erfordern, ist nxtFlow ihre effektive, digitale Alternative zu herkömmlichen Inspektionswerkzeugen</p>
        <p className='mt-2'>Unabhängig davon, ob Wartungs- und Sicherheitsinspektionen, stündliche Hygienekontrollen, Wartungsaufgaben oder Betriebsabläufe durchgeführt werden.</p>
        <p className='mt-2'>nxtDynamics  generiert digitale, branchenunabhängige Schritt-für-Schritt-Anleitungen, ergänzt diese mit SAP- und IoT-Daten, sowie verschiedenen Algorithmen und generieren daraus „Experten Wissen“ sowie dynamische Reports, die der restlichen Belegschaft in strukturierter, visuell aufbereiteter Form zur Verfügung gestellt werden</p>
        <p className='mt-2 text-lg'>SAP WMS Connector mit Funktionsbaustein für den Haenel Lean Lift SAP SD/MM/PM Connector ODATA, REST; SAP Business Connector</p>
        </div>
        <div onClick={onClose}><CgClose/></div>
    </div>
  )
}


export default ModalTwo