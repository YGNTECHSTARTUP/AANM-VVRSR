import React from 'react'
import Reusable from '@/app/comp/Reusable'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"Alumni" }
const page = () => {
  return (
    <div>
    <Reusable name="Alumni" parent='/alumni'/>
    </div>
  )
}

export default page