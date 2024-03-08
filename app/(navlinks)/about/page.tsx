import AboutCollage from '@/app/comp/AboutCollage'
import Reusable from '@/app/comp/Reusable'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"About" }
const page = () => {
  return (
    <div>
        <Reusable name='About' parent='/about'/>
        <AboutCollage keys={"about"}/>
    </div>
  )
}

export default page