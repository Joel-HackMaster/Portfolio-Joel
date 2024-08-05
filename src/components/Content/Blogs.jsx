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
    name: "Blog 1",
    title: "AZ-900",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FBlogs%2FCertificado_1.png?alt=media&token=c2cc60ee-11f1-452c-a618-e2f5299073a2",
    info: "Certificado IT CENTER LEARN  AZURE AZ-900",
    date: "02/08/2024",
    url: "https://www.canva.com/design/DAGMxBba0Rg/2ToBuDU6DxkliA0yrHuLOQ/view?utm_content=DAGMxBba0Rg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    tech: [
        ["Azure","fa-brands fa-microsoft", "cyan"], 
    ],
  },
  {
    name: "Blog 2",
    title: "SCRUM SFPC",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FBlogs%2FCertificado_2.png?alt=media&token=dde660a9-e03d-452d-97fd-94d4881c698d",
    info: "Certificado SCRUM SFPC",
    date: "02/08/2024",
    url: "https://www.canva.com/design/DAGMxBba0Rg/2ToBuDU6DxkliA0yrHuLOQ/view?utm_content=DAGMxBba0Rg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    tech: [
        ["Scrum","fa-solid fa-cubes", "green"], 
    ],
  },
  {
    name: "Blog 3",
    title: "Conferencia-Conversatorio Internacional Colombia 2023",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FBlogs%2FCertificado_3.png?alt=media&token=fb330c82-34dd-492f-83a0-0008cc83c3f3",
    info: "Certificado de participacion Conferencia-Conversatorio Internacional Colombia 2023",
    date: "02/08/2024",
    url: "https://www.canva.com/design/DAGMxBba0Rg/2ToBuDU6DxkliA0yrHuLOQ/view?utm_content=DAGMxBba0Rg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    tech: [
        ["Conferencia","fa-solid fa-person-chalkboard", "blue"], 
    ],
  },
  {
    name: "Blog 4",
    title: "Microsoft Excel 360",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FBlogs%2FCertificado_5.png?alt=media&token=043a11cb-e5d9-42e9-abc5-ceb8e66ce464",
    info: "Certificado de Excel Intermedio",
    date: "02/08/2024",
    url: "https://www.canva.com/design/DAGMxBba0Rg/2ToBuDU6DxkliA0yrHuLOQ/view?utm_content=DAGMxBba0Rg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    tech: [
        ["Excel","fa-solid fa-file-excel", "green"], 
    ],
  },
  {
    name: "Blog 5",
    title: "Linux aplicado a la seguridad informática",
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-f94b0.appspot.com/o/PORTFOLIO%2FBlogs%2FCertificado_6.png?alt=media&token=570ae071-a7a3-4c69-a1b7-c5433a6ab0d3",
    info: "Certificado de Excel Intermedio",
    date: "02/08/2024",
    url: "https://www.canva.com/design/DAGMxBba0Rg/2ToBuDU6DxkliA0yrHuLOQ/view?utm_content=DAGMxBba0Rg&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    tech: [
        ["Linux","fa-brands fa-linux", "black"],
        ["Seguridad","fa-solid fa-user-secret", "black"], 
    ],
  },
];

export default function Blogs() {
  return (
    <div
      className="my-8 w-full h-auto 
          bg-white bg-opacity-60 
          flex flex-col justify-center items-center
          rounded-xl"
    >
      {projects_info.map(
        ({ name, title, image, info, date, url, tech }, index) => (
          <Card className="w-2/3 mx-4 px-2 my-8" key={index}>
            <Typography
              color="blue-gray"
              className="font-medium fontName flex justify-center py-2"
              textGradient
            >
              {name}
            </Typography>
            <CardHeader floated={false} className="h-80 flex justify-center items-center bg-custom-gray-person cursor-pointer">
              <a href={url}>
                <img
                  src={image}
                  className="object-cover"
                  alt="profile-picture"
                />
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
              {tech.map(([tec, icon, color_tec], index) => (
                <Tooltip content={tec} key={index}>
                  <Typography as="a" variant="lead" textGradient>
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
        )
      )}
    </div>
  );
}
