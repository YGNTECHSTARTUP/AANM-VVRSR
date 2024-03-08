import React from 'react'
import { dept } from '@/constants'
import Image from 'next/image'
import Reusable from './Reusable'
const DeptReusable:React.FC<dept> = ({about,name,vision,mission,hod,imgurl,contact,email,parent}) => {
  return (
    <div className=' flex-col justify-center items-center'>
          <Reusable name={name} parent={parent}/>
    
    <Image src={imgurl} width={900} height={250} alt={name} className=' rounded-md shadow-lg shadow-muted-foreground relative mx-auto mt-32 ' />
<div className='container rounded-2xl bg-primary-foreground '>
<h1 className='text-4xl text-primary font-sans font-extrabold  mt-12 underline underline-offset-2  '>About Department</h1>
   <p className='bg-primary-foreground text-primary text-xl'>{about}</p>
<h1 className='text-4xl text-primary font-sans font-extrabold  mt-12 underline underline-offset-2  '>
    Vision
</h1>
<p className='bg-primary-foreground text-primary text-xl'>{vision}</p>
<h1 className='text-4xl text-primary font-sans font-extrabold  mt-12 underline underline-offset-2  '>
    Mission
</h1>
<h1 className='bg-primary-foreground text-primary text-xl'>
    {mission.map((m,i)=><li key={i}>{m}</li>)}
</h1>
<div className='flex gap-2'>
<h1 className='text-4xl text-primary font-sans font-extrabold  mt-12   '>
    Head of the Department:       
<span className='underline underline-offset-2 ml-2 '>{hod}</span>
</h1>
</div>
<h1 className='text-2xl text-primary font-semibold font-sans'>Contact number:<span className='underline underline-offset-2 ml-2'>{contact}</span></h1>
<h1 className='text-2xl text-primary font-sans font-semibold'>Email:<span className='underline underline-offset-2 ml-2'>{email}</span></h1>
</div>


    </div>
    
  )
}

export default DeptReusable