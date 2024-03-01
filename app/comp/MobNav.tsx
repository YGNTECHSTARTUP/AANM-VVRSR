"use client"

import { MenuIcon} from 'lucide-react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import React from 'react'
import Logo from './Logo'
import { NavLinkss } from '@/constants'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const MobNav = () => {
  return (
    <div>
        <Sheet >
        <SheetTrigger asChild >
       <MenuIcon className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side={'left'} className='bg-card'>
    <SheetHeader>
      <SheetTitle className='text-md border-b-2 border-primary'><Logo/></SheetTitle>
      
    </SheetHeader>
    {
      NavLinkss.map((link)=>{
        return (
          <SheetClose asChild>
  <Link key={link.name} href={link.route} className='flex text-lg font-sans  p-6 w-full  justify-center bg-card text-primary hover:text-orange-500'>

<Button className='rounded-xl w-full p-5 hover:text-orange-500' variant={'ghost'}>
{link.name}
</Button></Link>

          </SheetClose>
        


          )
      })
    }
  </SheetContent>
        </Sheet>
        
    </div>
  )
}

export default MobNav