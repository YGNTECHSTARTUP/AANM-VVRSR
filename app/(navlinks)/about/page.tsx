import AboutCollage from '@/app/comp/AboutCollage'
import Reusable from '@/app/comp/Reusable'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name='About'/>
        <AboutCollage keys={"about"}/>
    </div>
  )
}

export default page