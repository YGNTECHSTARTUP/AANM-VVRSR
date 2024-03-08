import React from 'react'
import Reusable from '@/app/comp/Reusable'
import { LibraryItems } from '@/constants'
import CardFac from '@/app/comp/CardFac'
const page = () => {
  return (
    <div className=' flex-col justify-center items-center'>
    <Reusable name="Library" parent='/facilities'/>
    <div className='container rounded-lg bg-background'>
    <div className='grid items-center container mx-auto gap-6 m-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
    {
      LibraryItems.map((item) => {
        return <CardFac id={item.id} imgurl={item.imgurl}/>
      })
    }
    </div>
    </div>
    </div>
  )
}

export default page