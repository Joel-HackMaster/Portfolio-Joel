import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../js/icons.js";
import "./style.css"

const projects_info = [
  {
    name: "Proyecto 1",
    title: "120-years-of-olympic-history-athletes-and-results",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FProjects%2Fproyecto1.png?alt=media&token=edd6aabd-f80c-4b56-bf42-60d87fffabce",
    info: "Proyecto de Analisis de Datos, desarrollado con Python pandas y Power BI",
    date: "01/08/2024",
    url: "https://www.canva.com/design/DAFxKA0YDxc/BYlH2e5EfuiqsJRufYta8w/view?utm_content=DAFxKA0YDxc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    tech: [
        ["Python","fa-brands fa-python", "blue"], 
        ["Power BI","fa-solid fa-signal", "orange"]
    ],
  },
];

export default function Proyectos() {
  return (
    <div
      className="my-8 w-full h-auto 
            bg-white bg-opacity-60 
            flex flex-wrap justify-center items-center
            rounded-xl lg:grid-flow-row"
    >
      {projects_info.map(({ name, title, image, info, date, url,tech }, index) => (
        <Card className="w-2/3 mx-4 px-2 my-8" key={index}>
            <Typography 
                color="blue-gray" 
                className="font-medium fontName flex justify-center py-2" 
                textGradient
            >
              {name}
            </Typography>
          <CardHeader floated={false} className="h-80 flex justify-center items-center bg-custom-gray-person cursor-pointer">
            <a href={url} target="_blank" rel="no ref">
                <img src={image} className="object-cover" alt="profile-picture" />
            </a>
          </CardHeader>
          <CardBody className="text-center">
            <h4 className="font-bold text-xl text-custom-gray-person fontName mb-2">
              {title}
            </h4>
            <span color="blue-gray" className="fontName">
              {info}
            </span>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            {tech.map(([ tec, icon, color_tec ], index) => (
                <Tooltip content={tec} key={index}>
                <Typography
                  as="a"
                  variant="lead"
                  textGradient
                >
                  <FontAwesomeIcon color={color_tec} icon={icon} />
                </Typography>
              </Tooltip>
            ))}
          </CardFooter>
          <Typography 
                color="blue-gray" 
                className="font-medium fontName flex justify-center py-2" 
                textGradient
            >
              {date}
            </Typography>
        </Card>
      ))}
    </div>
  );
}
