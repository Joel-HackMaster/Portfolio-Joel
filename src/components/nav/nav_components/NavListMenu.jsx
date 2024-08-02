import { RocketLaunchIcon, Square3Stack3DIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Card, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import React from 'react'

const navListMenuItems = [
    {
      title: "#ReactJS",
      description:
        "18.3",
    },
    {
      title: "#Django",
      description:
        "3.12",
    },
    {
      title: "#Material Tailwind PRO",
      description:
        "2.1.9",
    },
    {
        title: "#Vite",
        description:
          "Herramienta",
      },
  ];

export default function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const renderItems = navListMenuItems.map(({title, description})=>(
        <a href='#' key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {description}
                </Typography>
            </MenuItem>
        </a>
    )) 
  return (
    <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
            <MenuHandler>
                <Typography as="a" href='#' variant='small' className="font-normal">
                    <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                        <Square3Stack3DIcon className="h-[18px] w-[18px]"/> {" "}
                            Hecho con{" "}
                        <ChevronDownIcon
                            strokeWidth={2}
                            className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180 text-blue-gray-900" : ""
                            }`}
                        />
                    </MenuItem>
                </Typography>
            </MenuHandler>
            <MenuList className='hidden w-[36rem] grid-cols-7 
                gap-3 overflow-visible lg:grid'>
                <Card
                color='blue'
                shadow={false}
                variant='gradient'
                className='col-span-3 grid h-full w-full 
                place-items-center rounded-md'>
                    <img className='h-full object-cover rounded-md' src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG53bnc2MTJ2bnh4OWhkMGZoNWViMHQxb3h4cXJ6OGdsZ2x6N3d3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zMukICnMEZmSf8zvXd/giphy.gif'/>
                </Card>
                <ul className='col-span-4 flex w-full flex-col gap-1 bg-white'>
                    {renderItems}
                </ul>
            </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-white lg:hidden">
            <Square3Stack3DIcon className="h-[18px] w-[18px] text-white" />{" "}
                Hecho con{" "}
        </MenuItem>
        <ul className="flex w-full flex-col gap-1 lg:hidden bg-white">
            {renderItems}
        </ul>
    </React.Fragment>
  )
}

//<RocketLaunchIcon strokeWidth={1} className='h-28 w-28'/>