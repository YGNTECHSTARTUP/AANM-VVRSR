
import React from 'react'
import { departments } from '@/navigationconstants'

import Cardgroup from '@/app/comp/Cardgroup'

const page = () => {
  return (
    <div className='grid mt-36 gap-6  md:grid-cols-2 lg:grid-cols-3  justify-center container '>
{
    departments.map((dept)=>{
        return (

        <Cardgroup key={dept.key} id={dept.key} imgurl={dept.dept} href={dept.href} name={dept.label}/>
         
        )
    })
}
    </div>
  )
}

export default page