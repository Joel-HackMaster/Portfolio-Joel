import { Typography } from '@material-tailwind/react'
import React from 'react'
import "./Profile.css"

export default function Footer() {
  return (
    <div className='h-auto w-auto rounded-t-lg'>
        <div className='h-full py-2 rounded-t-lg bg-custom-gray-person bg-opacity-70'>
            <span
                className='fontName text-white px-8 w-auto h-full rounded-t-lg'
            >
                Creado por 👽 Joel Wilton Sánchez Bravo
            </span>
        </div>
    </div>
  )
}
