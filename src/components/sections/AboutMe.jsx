import React from "react";
import {
    ReactSticker,
    Django
} from '../Resources/Logos'

export default function AboutMe() {
  return (
    <div
      className="mb-4 bg-custom-gray-person bg-opacity-70 h-auto flex flex-col items-center justify-center 
            rounded-e-lg"
    >
      <div className="fondo-gradiente mt-8 w-full h-16 flex justify-center items-center lg:">
        <span className="fontName uppercase text-white font-black text-4xl">
            👋 SOBRE MI
        </span>
      </div>
      <div className="w-full flex px-8 py-8 justify-center">
        <span className="text-white fontName inline">
            Soy Ingeniero de Software 🧑‍💻 y actualmente desarrollo aplicaciones web utilizando React 
            <span className="inline-block px-1"><ReactSticker /></span>
            y Django <span className='inline-block px-1-'><Django /></span>, estoy en búsqueda de practicas para reforzar mis 
            habilidades, soy entusiasta, innovador y resolutivo.
        </span>
      </div>
    </div>
  );
}
