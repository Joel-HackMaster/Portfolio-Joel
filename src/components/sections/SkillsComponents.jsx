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
  PSQL,
  SpringBoot,
  Java,
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
      className="bg-custom-gray-person bg-opacity-70 max-w-full
            h-auto flex flex-col items-center justify-center 
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
          <span color="white" className="fontName font-semibold text-4xl text-center">
            ANALISIS DE DATOS
          </span>
          <div className="grid grid-cols-2 2xl:grid-flow-col">
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <Excel />
              <span className="text-center fontName">Excel</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <Pandas />
              <span className="text-center fontName">Pandas</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <PowerBi />
              <span className="text-center fontName">Power Bi</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <Firebase />
              <span className="text-center fontName">Firebase</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8 text-center">
            BACKEND
          </span>
          <div className="grid grid-cols-2 2xl:grid-flow-col">
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <Python />
              <span className="text-center fontName">Python</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <C />
              <span className="text-center fontName">C#</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <Postman />
              <span className="text-center fontName">Postman</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <Java />
              <span className="text-center fontName">Java</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-center text-4xl mt-8">
            BASES DE DATOS
          </span>
          <div className="grid grid-cols-2 2xl:grid-flow-col">
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <MySQL />
              <span className="text-center fontName">MySQL</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <MicrosoftSQLServer />
              <span className="text-center fontName">SQL server</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <PSQL />
              <span className="text-center fontName">Postgres SQL</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            CLOUD
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <MicrosoftAzure />
              <span className="text-center fontName">Azure</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <GoogleCloud />
              <span className="text-center fontName">Google Cloud</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            FRAMEWORKS
          </span>
          <div className="grid grid-cols-2 xl:flex 2xl:flex-row">
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <IconReact />
              <span className="text-center fontName">React JS</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <DjangoIcon />
              <span className="text-center fontName">Django</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <SpringBoot />
              <span className="text-center fontName">SpringBoot</span>
            </div>
          </div>
          <span color="white" className="fontName font-semibold text-4xl mt-8">
            FRONTEND
          </span>
          <div className="grid grid-cols-2 2xl:grid-flow-col">
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <JavaScript />
              <span className="text-center fontName">JavaScript</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem] ">
              <HTML5 />
              <span className="text-center fontName">HTML5</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <CSS />
              <span className="text-center fontName">CSS</span>
            </div>
            <div className="flex flex-col items-center mt-4 mx-4 min-w-[5rem]">
              <TailwindCSS />
              <span className="text-center fontName">TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
