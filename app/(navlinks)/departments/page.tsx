"use client"
import React from 'react'
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from '@/components/ui/card'
import { departments } from '@/navigationconstants'
import Image from 'next/image'
import Link from 'next/link'
import { BackgroundGradient } from '@/components/ui/background-gradient'

const page = () => {
  return (
    <div className='grid mt-36 gap-6  md:grid-cols-2 lg:grid-cols-3  justify-center container '>
{
    departments.map((dept)=>{
        return (

          <Link key={dept.key} href={dept.href}>
            <BackgroundGradient className="rounded-[10%] max-w-md -p-[5%]  bg-white dark:bg-zinc-900">
            <Card  className='bg-card text-card-foreground   '>
            <CardHeader>
            <CardTitle>{dept.label}</CardTitle>
            </CardHeader>
            <CardContent>
           <Image alt={dept.key} height={300} width={300} src={dept.dept}/>
            </CardContent>
            <CardFooter>
            <h2 className='font-semibold'>Explore</h2>
            </CardFooter>
            </Card>
            </BackgroundGradient>
           
       
            
         
          </Link>
         
        )
    })
}
    </div>
  )
}

export default page