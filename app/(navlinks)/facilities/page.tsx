
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"Sports" }
import { faciliities } from '@/constants'
import Cardgroup from '@/app/comp/Cardgroup'
const page = () => {
  return (
    <div className='grid mt-36 gap-6  md:grid-cols-2 lg:grid-cols-3  justify-center container '>
{
    faciliities.map((fac)=>{
        return (

         <Cardgroup key={fac.id} id={fac.id} href={fac.href} name={fac.name} imgurl={fac.imgurl}/>
         
        )
    })
}
    </div>
  )
}

export default page