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
        <div className="w-full md:w-6/12 bg-gray-300 flex flex-col justify-center">
          <h1 className="text-5xl text-gray-600 font-semibold ml-3">nxtQ</h1>
          <p className="text-2xl font-semibold uppercase ml-3 mt-5">
            EIN MOBILER HIGH-TECH- ARBEITSPLATZ
          </p>
          <div className="ml-3">
            <img src={Logo} alt="" className="w-2/12 h-2/12 float-left" />
            <p className="text-2xl mt-5">
              Ein HW/SW Bundle im Militär-Industrie-Standard, staubdicht,
              wasserdicht, Temperatur beständig. Stabil!
            </p>
          </div>
          <div className="flex w-full mt-10 ml-10">
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
