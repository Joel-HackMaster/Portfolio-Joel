import React from 'react'
import ProfileComponent from '../../components/sections/ProfileComponent'
import SkillsComponents from '../../components/sections/SkillsComponents'
import './Dashboard.css'
import Footer from '../../components/sections/Footer'
import AboutMe from '../../components/sections/AboutMe'

export default function Dashboard() {
  return (
    <div className='flex flex-col overflow-x-hidden h-full w-full'>
      <div className='flex flex-col-reverse lg:flex-row w-full'>
          <div 
            className='mr-0 mt-4 lg:w-1/3 
              h-auto lg:mt-28 lg:mr-4'>
            <AboutMe/>
            <SkillsComponents />
          </div>
          <div className='lg:w-2/3 h-auto mt-28'>
              <ProfileComponent />
          </div>
      </div>
      <div className='h-auto flex justify-center mt-4'>
        <Footer/>
      </div>
    </div>
    
  )
}
