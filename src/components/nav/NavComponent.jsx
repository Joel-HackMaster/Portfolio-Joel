import React from 'react'
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
  } from "@material-tailwind/react";
import NavList from './nav_components/NavList';
import { Bars2Icon } from '@heroicons/react/24/solid';
import NavProfile from './nav_components/NavProfile';
import { Navigate } from 'react-router-dom';
import './NavStyle.css'

export default function NavComponent() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    const logo = '<Portafolio>'
    const name = '<Joel Sánchez>'

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);
  return (
    <Navbar className="rounded-none z-50 right-0 top-0 max-w-full mb-4 fixed gap-2 lg:top-0 lg:right-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:z-50">
        <div className='flex items-center justify-between text-blue-gray-900'>
            <div className='w-56'>
                <Typography
                    as='a'
                    href='#'
                    id='fuente'
                    className='mr-4 ml-4 
                    cursor-pointer text-lg'
                >
                    {logo}
                </Typography>
                <Typography
                    as='a'
                    href='#'
                    id='fuente'
                    className='mr-4 ml-4 
                    cursor-pointer py-1.5 text-lg text-end'
                >
                    {name}
                </Typography>
            </div>
            <div className='flex items-center'>
                <div className='hidden lg:block'>
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className='h-6 w-6'/>
                </IconButton>
                <div className='ml-8'>
                    <NavProfile />
                </div>
            </div>
        </div>
        <div className={`h-auto navList rounded-xl ${
            isNavOpen === true ? 'mt-2' : ''
        }`}>
            <Collapse open={isNavOpen}>
                <NavList />
            </Collapse>
        </div>
    </Navbar>
  )
}
