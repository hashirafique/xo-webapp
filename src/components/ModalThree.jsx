import React from "react";
import { CgClose } from "react-icons/cg";

const ModalThree = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="h-9/12 w-1/2 left-[25%] -mt-[50%] p-5 shadow-md rounded-md border-solid border-2 mt-2 flex justify-center bg-white absolute">
      <div className="">
        <h1 className="text-5xl text-gray-600 font-bold ml-7">Mehr nxtQ</h1>
        <p className="mt-2">
          Das leichte Design macht Augmented Reality einfach, mobil und bequem.
        </p>
        <p className="mt-2">
          nxtQ erfüllt internationale Anforderungen und kann mit in die Kabine
          genommen
        </p>
        <h1 className="text-5xl text-gray-600 font-bold ml-7 mt-5">
          Konstantes F&E
        </h1>
        <p className="mt-2">
          In Berlin arbeiten unsere Ingenieure an nxtQ, um diesen ständig zu
          verbessern, weiterzuentwickeln und den Wünschen unserer Kunden
          anpassen.
        </p>
      </div>
      <div onClick={onClose}><CgClose/></div>
    </div>
  );
};
export default ModalThree;
