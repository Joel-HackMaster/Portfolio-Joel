import React from "react";
import "./Profile.css";
import { Typography, Avatar } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../../js/icons.js";
import Proyectos from "../Content/Proyectos.jsx";
import Blogs from "../Content/Blogs.jsx";

export default function ProfileComponent() {
  return (
    <>
      <div
        className="w-full h-auto bg-custom-gray-person bg-opacity-70
                  flex flex-col justify-center rounded-s-lg"
      >
        <div className="fondo-gradiente mt-8 w-full h-16 flex justify-center items-center">
            <span className="fontName text-white font-black text-4xl">
                PERFIL
            </span>
        </div>
        <div className="grid grid-cols-2 pt-16 pb-8 gap-4">
          <div
            className="w-full flex justify-end pr-12"
          >
            <Avatar
              variant="circular"
              alt="Joel Sanchez"
              className="border w-52 h-52 border-white p-0.5"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FSuperusers%2F2021-05-16-093048.jpg?alt=media&token=62cee9b0-3f17-4b0a-b1a0-e7a69c91837f"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-start">
            <div className="w-auto px-4 py-2 bg-opacity-90 bg-white rounded-lg">
              <span
                color="white"
                className="fontName text-custom-gray-person text-2xl font-semibold"
              >
                Hola soy Joel Wilton Sánchez Bravo
              </span>
            </div>
            <div className="w-aut mt-4 bg-white p-2 bg-opacity-90 rounded-lg">
              <span
                color="white"
                className="fontName text-lg text-custom-gray-person font-semibold"
              >
                Ingeniero de Software
              </span>
            </div>
            <div className="w-aut mt-4 flex-row bg-white p-2 bg-opacity-90 rounded-lg">
              <a
                color="white"
                className="mx-2 p-1 rounded-lg bg-custom-gray-person"
                href="https://github.com/Joel-HackMaster"
              >
                <FontAwesomeIcon color="white" icon={faGithub} />
              </a>
              <a
                color="white"
                className="mx-2 p-1 rounded-lg bg-custom-gray-person"
              >
                <FontAwesomeIcon color="white" icon={faLinkedinIn} />
              </a>
              <a
                color="white"
                className="mx-2 p-1 rounded-lg bg-custom-gray-person"
              >
                <FontAwesomeIcon color="white" icon={faXTwitter} />
              </a>
            </div>
          </div>
        </div>
        <div className="fondo-gradiente mt-8 w-full h-16 flex justify-center items-center">
            <span className="fontName text-white font-black text-4xl">
                PROYECTOS
            </span>
        </div>
        <section id="1" className="w-full px-12">
          <Proyectos/>
        </section>
        <div className="fondo-gradiente w-full h-16 flex justify-center items-center">
            <span className="fontName text-white font-black text-4xl">
                BLOGS
            </span>
        </div>
        <section id="2" className="w-full px-12">
          <Blogs/>
        </section>
      </div>
    </>
  );
}
