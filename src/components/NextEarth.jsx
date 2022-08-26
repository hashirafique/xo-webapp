import React, { useState } from "react";
import PictureTwo from "../assets/Picture2.png";
import Logo from "../assets/logo.png";
import ModalOne from "./ModalOne";
import DemoBtnTwo from "./DemoBtnTwo";

const NextEarth = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className=" md:flex">
        <div className="w-full md:w-6/12">
          <img src={PictureTwo} alt="" />
        </div>
        <div className="w-full md:w-6/12 bg-gray-300 flex flex-col justify-center ml-5">
          <h1 className="text-5xl text-gray-600 font-semibold">
            nxtEARTH
          </h1>
          <p className="text-3xl font-semibold uppercase mt-5 md:w-1/2">
            Eine völlig neue Erfahrung. Das ist Metavese
          </p>
          <div className="ml-3">
            <img src={Logo} alt="" className="w-[12%] float-left mt-5 pr-5" />
            <p className="text-3xl mt-5 md:w-1/2">
              nxtEarth visualisiert generisch nahezu jede Geoinformation in
              einer holografischen 3D Umgebung.
            </p>
          </div>
          <div className="flex w-full mt-10">
            <div>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-blue-700 text-white text-2xl w-full px-3"
              >
                Mehr
              </button>
              <ModalOne open={openModal} onClose={() => setOpenModal(false)} />{" "}
            </div>
            <div><DemoBtnTwo/> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEarth;
