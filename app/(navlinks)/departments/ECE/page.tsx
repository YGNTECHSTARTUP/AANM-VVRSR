import React from 'react'
import { ECE_DEPARTMENT } from '@/constants'
import DeptReusable from '@/app/comp/DeptReusable'

const page = () => {
    const {name,hod,mission,imgurl,vision,contact,email,about} = ECE_DEPARTMENT
  return (
  
    <DeptReusable name={name} parent="/departments" hod={hod} mission={mission} about={about} imgurl={imgurl} vision={vision} contact={contact} email={email}/>
  )
}

export default page