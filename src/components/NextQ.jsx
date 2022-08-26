import React, { useState } from "react";
import Logo from "../assets/logo.png";
import PictureFour from "../assets/Picture4.png";
import DemoBtnThree from "./DemoBtnThree";
import ModalThree from "./ModalThree";


const NextQ = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="w-full md:flex mt-5">
        <div className="w-full md:w-6/12">
          <img src={PictureFour} alt="" />
        </div>
        <div className="w-full md:w-6/12 bg-gray-300 flex flex-col justify-center ml-5">
          <h1 className="text-5xl text-gray-600 font-semibold">nxtQ</h1>
          <p className="text-3xl font-semibold uppercase mt-5 md:w-1/2">
            EIN MOBILER HIGH-TECH- ARBEITSPLATZ
          </p>
          <div className="">
            <img src={Logo} alt="" className="w-[12%] float-left mt-5 pr-5" />
            <p className="text-3xl mt-5 md:w-1/2">
              Ein HW/SW Bundle im Militär-Industrie-Standard, staubdicht,
              wasserdicht, Temperatur beständig. Stabil!
            </p>
          </div>
          <div className="flex w-full mt-10">
            <div>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-700 text-white text-2xl w-full px-3">
                Mehr
              </button>
              <ModalThree open={openModal} onClose={() => setOpenModal(false)} />{" "}
              </div>
              <div><DemoBtnThree/> </div>
            </div>
            
          </div>
        </div>
      </div>
    
  );
};

export default NextQ;
