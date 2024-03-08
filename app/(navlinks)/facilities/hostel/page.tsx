import React from 'react'
import Reusable from '@/app/comp/Reusable'
import { HostelItems } from '@/constants'
import CardFac from '@/app/comp/CardFac'
const page = () => {
  
  return (
    <div>
    <Reusable name="Hostel" parent='/facilities'/>
    <div className='grid items-center container mx-auto gap-6 m-6 grid-cols-1 md:grid-cols-2 lg:grid-cols'>
    {
      HostelItems.map((item) => {
        return <CardFac id={item.id} imgurl={item.imgurl}/>
      })
    }
    </div>
   
    </div>
  )
}

export default page