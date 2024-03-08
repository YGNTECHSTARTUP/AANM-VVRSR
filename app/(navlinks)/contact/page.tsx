import React from 'react'
import Reusable from '@/app/comp/Reusable'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"Contact" }
const page = () => {
  return (
    <div>
    <Reusable name="Contact" parent='/contact'/>
    </div>
  )
}

export default page