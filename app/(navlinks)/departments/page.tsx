import React from 'react'
import {Card,CardContent,CardFooter,CardHeader,CardTitle} from '@/components/ui/card'
import { departments } from '@/navigationconstants'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div className='grid mt-12 gap-4  md:grid-cols-2 lg:grid-cols-3  justify-center container '>
{
    departments.map((dept)=>{
        return (
          <Link key={dept.key} href={dept.href}>
             <Card  className='bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground w-[100%] h-[80%] m-5  '>
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
          </Link>
         
        )
    })
}
    </div>
  )
}

export default page