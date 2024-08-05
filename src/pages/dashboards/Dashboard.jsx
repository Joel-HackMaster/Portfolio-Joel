import React from 'react'
import ProfileComponent from '../../components/sections/ProfileComponent'
import SkillsComponents from '../../components/sections/SkillsComponents'
import './Dashboard.css'
import Footer from '../../components/sections/Footer'
import AboutMe from '../../components/sections/AboutMe'

export default function Dashboard() {
  return (
    <div className='h-full w-full pt-28'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-1'>
            <AboutMe />
            <SkillsComponents />
          </div>
          <div className='lg:col-span-2'>
            <ProfileComponent />
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <Footer />
        </div>
    </div>
  )
}
