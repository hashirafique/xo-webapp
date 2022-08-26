import React from 'react'
import {CgClose} from 'react-icons/cg'

const ModalOne = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='h-9/12 w-1/2 right-[25%] p-5 shadow-md rounded-md border-solid border-2 mt-2 flex justify-center bg-white absolute'>
        
        <div className=''>
        <h1 className='text-5xl text-gray-600 font-bold ml-7'>Mehr nxtEarth</h1>
        <p className='text-2xl font-semibold uppercase mt-2'>Problem</p>
        <p className='mt-2'>Üblicherweise basiert ein dreidimensionales (3D) geografisches Informationssystem (GIS) auf einer zweidimensionalen (2D) Visualisierungsplattform, die aber das Verständnis und den Ausdruck einer „realen Welt“ im 3D-Raum nicht in der Lage ist realistisch abzubilden.</p>
        <p className='text-2xl font-semibold uppercase mt-2'>Lösung</p>
        <p className='mt-2'>nxtEarth löst das Problem (dass Benutzer auf die Perspektive eines 2D-Bildschirms beschränkt sind), indem man dieses 3D Informationssystem auf eine Mixed Reality (MR) Brille portierte.</p>
        <p className='mt-2'>Hintergrund von nxtEarth war der Einsatz von Augmented Reality (AR) in der Berufsausbildung für Bevölkerungsschutz und zivile Sicherheit, mit dem Ziel, Führungskräfte in Verwaltung und staatlichen Behörden professionell und methodisch für die Krisensituation zu schulen.</p>
        <p className='mt-2'>Dazu visualisierten wir Großschadenslagen und simulierten Krisenbewältigungsszenarien in einer 3D-Umgebung.</p>
        <p className='mt-2'>Diese 3D-Umgebung ist mobil und integriert beliebig viele AR-Brillen über Simulationsserver und Lenksteuerung.</p>
        </div>
        <div onClick={onClose}><CgClose/></div>
    </div>
  )
}

export default ModalOne