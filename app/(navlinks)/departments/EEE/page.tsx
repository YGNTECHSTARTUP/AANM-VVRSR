import React from 'react'
import { EEE_DEPARTMENT } from '@/constants'
import DeptReusable from '@/app/comp/DeptReusable'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"EEE" }
const page = () => {
    const {name,hod,mission,imgurl,vision,contact,email,about} = EEE_DEPARTMENT
  return (
  
    <DeptReusable name={name} parent="/departments" hod={hod} mission={mission} about={about} imgurl={imgurl} vision={vision} contact={contact} email={email}/>
  )
}

export default page