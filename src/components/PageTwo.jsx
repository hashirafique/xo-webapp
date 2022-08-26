import React from "react";
import PictureOne from "../assets/picture1.png";

import NextEarth from "./NextEarth";
import NextFlow from "./NextFlow";
import NextQ from "./NextQ";

const PageTwo = () => {
  return (
    <div className="w-full mt-10 px-10 mt-14">
      <h1 className="text-5xl text-gray-600 font-semibold md:font-bold">About</h1>

      <div className="md:flex">
        <div className="w-full md:w-6/12 md:mt-14">
          <p className="text-2xl font-semibold uppercase md:text-4xl">
            Es gibt 1000 Augmented RealitY Entwickler Auf der Welt.
          </p>
          <p className="text-2xl font-semibold uppercase mt-2 md:mt-14">
            wir sind Anders.{" "}
          </p>
          <p className="text-sm mt-2 md:text-lg lg:text-xl md:text-xl md:mt-14">
            nxtDynamics bietet umfassende Kompetenz im Bereich Virtual-
            Augmented- und Mixed Reality, sowie Mensch-Computer-Interaktion und
            eine breite Vielfalt an Augmented Reality Applikationen,
            Konfigurationen, sowie eine optionale Integrationen ins SAP an, die
            für jede Branche, Prozess und Anwendungsbereich gezielt und einfach
            angepasst werden können.
          </p>
          <p className="text-sm mt-2 md:text-lg lg:text-xl md:mt-14">
            nxtDynamics ist die Kollaborationsplattform für AR Modelle,
            Simulationen und die einfachste Möglichkeit, Schritt für Schritt
            Anleitungen zu generieren, anzuzeigen, sprachgesteuert abzuarbeiten
            und das Protokoll abzulegen, gerne am SAP
          </p>
        </div>
        <div className="w-full md:w-6/12">
          <img src={PictureOne} alt="" className="w-auto h-auto" />
        </div>
      </div>

      <h1 className="text-5xl text-gray-600 font-semibold md:font-bold">Produkte</h1>

      <div>
        <NextEarth />
      </div>

      <div>
        <NextFlow />
      </div>

      <NextQ />
    </div>
  );
};

export default PageTwo;
