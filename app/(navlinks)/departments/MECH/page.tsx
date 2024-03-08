import React from 'react'
import { MECH_DEPARTMENT } from '@/constants'
import DeptReusable from '@/app/comp/DeptReusable'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"MECH" }
const page = () => {
    const {name,hod,mission,imgurl,vision,contact,email,about} = MECH_DEPARTMENT
  return (
  
    <DeptReusable name={name} parent="/departments"  hod={hod} mission={mission} about={about} imgurl={imgurl} vision={vision} contact={contact} email={email}/>
  )
}

export default page