import React from 'react'
import Reusable from '@/app/comp/Reusable'
import { sportsItems } from '@/constants'
import CardFac from '@/app/comp/CardFac'
const page = () => {
  return (
    <div>
    <Reusable name="Gallery" parent='/gallery'/>
    <div className='grid items-center container mx-auto gap-6 m-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
    {
      sportsItems.map((item) => {
        return <CardFac id={item.id} imgurl={item.imgurl}/>
      })
    }
    </div>
    </div>
  )
}

export default page