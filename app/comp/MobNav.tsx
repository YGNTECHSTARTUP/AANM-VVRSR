"use client"

import { MenuIcon} from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import React from 'react'
import Logo from './Logo'
import { NavLinkss } from '@/constants'

const MobNav = () => {
  return (
    <div>
        <Sheet >
        <SheetTrigger>
       <MenuIcon className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side={'left'} className='bg-card'>
    <SheetHeader>
      <SheetTitle className='text-md border-b-2 border-primary'><Logo/></SheetTitle>
      
    </SheetHeader>
    {
        NavLinkss.map((link)=>{
            return (
                <button className='text-lg w-full text-left p-2 hover:bg-primary hover:text-background' key={link.key}>{link.name}</button>
            )
        })
    }
  </SheetContent>
        </Sheet>
        
    </div>
  )
}

export default MobNav