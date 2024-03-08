import React from 'react'
import { CSE_DEPARTMENT } from '@/constants'
import DeptReusable from '@/app/comp/DeptReusable'

const page = () => {
    const {name,hod,mission,imgurl,vision,contact,email,about} = CSE_DEPARTMENT
  return (
  
    <DeptReusable name={name}  parent="/departments" hod={hod} mission={mission} about={about} imgurl={imgurl} vision={vision} contact={contact} email={email}/>
  )
}

export default page