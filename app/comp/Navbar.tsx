"use client"
import React from 'react'
import Logo from './Logo'
import Navlinks from './Navlinks'


import { ModeToggle } from '@/components/ui/toggle'

import MobNav from './MobNav'

const Navbar = () => {
  return (
    <div className='flex bg-background h-16 gap-2 border-b-primary border-2 justify-between sticky top-0 z-50 lg:fixed lg:w-full lg:top-0 lg:z-50'>
      <div>
      <Logo/>
      </div>
        <div className='hidden lg:flex  ' >
        <Navlinks/>
        </div>
        <div className='lg:hidden flex mt-4 gap-3 mx-3'>
         
          <ModeToggle/>
         <MobNav/> 
        </div>
    </div>
  )
}

export default Navbar