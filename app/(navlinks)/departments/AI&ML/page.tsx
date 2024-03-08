import React from 'react'
import { AIML_DEPARTMENT } from '@/constants'
import DeptReusable from '@/app/comp/DeptReusable'

const page = () => {
    const {name,hod,mission,imgurl,vision,contact,email,about} = AIML_DEPARTMENT
  return (
  
    <DeptReusable name={name} parent="/departments"  hod={hod} mission={mission} about={about} imgurl={imgurl} vision={vision} contact={contact} email={email}/>
  )
}

export default page