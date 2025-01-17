import React from "react";
import {
    ReactSticker,
    Django,
    JavaIcon,
    SpringBootIcon
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
    

            Hola me llamo Joel, soy estudiante de ultimo año de Ingenieria de Software 🧑‍💻, 
            actualmente desarrollo aplicaciones web cuento con 2 años de experiencia, 
            lenguajes como Python (Django) <span className='inline-block px-1-'><Django /></span> 
            y Java (SpringBoot) <span className='inline-block px-1-'><SpringBootIcon /></span> en Backend y en 
            Frontend React JS (<span className="inline-block px-1"><ReactSticker /></span>), 
            absolviendo mis dudas leyendo documentación y utilizando IA,  
            Soy un entusiasta y apasionado por la tecnología y la innovación, 
            especialmente en el ámbito Backend y el DevOps, 
            busco oportunidades para contribuir en las empresas.
        </span>
      </div>
    </div>
  );
}
