"use client"
import BackgroundGradient from '@/components/ui/background-gradient'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardgroupProps {
    id:string,
    href: string
    name: string
    imgurl: string
    
}
const Cardgroup:React.FC<CardgroupProps> = ({id,href,name,imgurl}) => {
  return (
    <Link key={id} href={href}>
            <BackgroundGradient className="rounded-[10%] max-w-md -p-[5%]  bg-white dark:bg-zinc-900">
            <Card  className='bg-card text-card-foreground   '>
            <CardHeader>
            <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
           <Image alt={name} height={300} width={300} src={imgurl}/>
            </CardContent>
            <CardFooter>
            <h2 className='font-semibold'>Explore</h2>
            </CardFooter>
            </Card>
            </BackgroundGradient>
           
       
            
         
          </Link>
  )
}

export default Cardgroup