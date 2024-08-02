import React from 'react'
import ProfileComponent from '../../components/sections/ProfileComponent'
import SkillsComponents from '../../components/sections/SkillsComponents'

export default function Dashboard() {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-full h-full overflow-x-hidden sm:'>
        <div className='mr-0 mt-4 lg:w-1/3 h-auto lg:mt-28 lg:mr-4'>
          <SkillsComponents />
        </div>
        <div className='lg:w-2/3 h-auto mt-28'>
            <ProfileComponent />
        </div>
    </div>
  )
}
