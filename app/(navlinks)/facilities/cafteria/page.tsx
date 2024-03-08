import React from 'react'
import Reusable from '@/app/comp/Reusable'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"Cafteria" }
const page = () => {
  return (
    <div>
    <Reusable name="Cafteria" parent='/facilities'/>
    </div>
  )
}

export default page