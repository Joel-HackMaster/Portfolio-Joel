import React from "react";
import "./Profile.css";
import { Typography, Avatar } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  DjangoIcon,
  Python,
  C,
  MySQL,
  MicrosoftSQLServer,
  Excel,
  Pandas,
  Firebase,
  MicrosoftAzure,
  GoogleCloud,
  IconReact,
  JavaScript,
  HTML5,
  TailwindCSS,
  CSS,
  Postman,
  PowerBi,
} from "../Resources/Logos";
import "../../js/icons.js";

export default function SkillsComponents() {
  return (
    <div
      className="bg-custom-gray-person bg-opacity-70 h-auto flex flex-col items-center justify-center 
            rounded-e-lg"
    >
      <div className="fondo-gradiente mt-8 w-full h-16 flex justify-center items-center lg:">
        <span className="fontName uppercase text-white font-black text-4xl">
          SKILLS
        </span>
      </div>
      <div className="w-full px-8">
        <div
          className="flex items-center flex-col w-full h-auto py-10 rounded-xl
                bg-white bg-opacity-70 text-custom-gray-person my-8"
        >
          <span color="white" className="fontName font-semibold text-4xl">
            ANALISIS DE DATOS
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <Excel />
              <span className="text-center fontName">Excel</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <Pandas />
              <span className="text-center fontName">Pandas</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <PowerBi />
              <span className="text-center fontName">Power Bi</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <Firebase />
              <span className="text-center fontName">Firebase</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            BACKEND
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <Python />
              <span className="text-center fontName">Python</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <C />
              <span className="text-center fontName">C#</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <Postman />
              <span className="text-center fontName">Postman</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            BASES DE DATOS
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <MySQL />
              <span className="text-center fontName">MySQL</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <MicrosoftSQLServer />
              <span className="text-center fontName">SQL server</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            CLOUD
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <MicrosoftAzure />
              <span className="text-center fontName">SQL server</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <GoogleCloud />
              <span className="text-center fontName">Google Cloud</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            FRAMEWORKS
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <IconReact />
              <span className="text-center fontName">React JS</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <DjangoIcon />
              <span className="text-center fontName">Django</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            FRONTEND
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <JavaScript />
              <span className="text-center fontName">JavaScript</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <HTML5 />
              <span className="text-center fontName">HTML5</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <CSS />
              <span className="text-center fontName">CSS</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 xl:flex xl:flex-col xl:justify-center">
              <TailwindCSS />
              <span className="text-center fontName">TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
