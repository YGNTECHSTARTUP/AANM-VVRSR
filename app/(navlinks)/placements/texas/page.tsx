import Reusable from '@/app/comp/Reusable'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <Reusable name="Texas" parent='/placements'/>
        <div className='mt-10 flex-col justify-center items-center container rounded-lg bg-card'>
       <Image src="/assets/placement/texas.jpg" alt="Texas" className='mx-auto' width={500} height={500} />   
    </div> </div>
  )
}

export default page