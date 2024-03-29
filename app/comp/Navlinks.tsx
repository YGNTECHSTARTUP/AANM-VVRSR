import React from 'react'
import { NavLinkss } from '@/constants'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {  departments, facilities,projects} from '@/navigationconstants'

const Navlinks = () => {
  return (
    <div className="gap-4 flex mt-5" >
     {NavLinkss.map((link)=>{
        return (
            <Link key={link.key} href={link.route} className='hover:text-orange-500 border-dotted font-semibold text-sm mr-5'>
            <DropdownMenu>
            <DropdownMenuTrigger>
             {link.name}
              </DropdownMenuTrigger>
              {
                
                 link.name === "DEPARTMENTS" && <div>
                  <DropdownMenuContent side={'bottom'} align={'start'}>
                  {
                    departments.map((item)=>(
                     
                        <DropdownMenuItem key={item.key}>
                       <Link href={`${item.href}`} passHref legacyBehavior>
                       {item.label}
                       </Link>   
                          </DropdownMenuItem>
                      
                    ))}
                  </DropdownMenuContent></div> ||   link.name === "OURPROJECTS" && <div>
                  <DropdownMenuContent side={'bottom'} align={'start'}>
                  {
                    projects.map((item)=>(
                     
                        <DropdownMenuItem key={item.key}>
                       <Link href={`${item.href}`} passHref legacyBehavior>
                       {item.label}
                       </Link>   
                          </DropdownMenuItem>
                      
                    ))}
                  </DropdownMenuContent></div> ||
                  link.name === "FACILITIES" && <div>
                     <DropdownMenuContent side={'bottom'} align={'start'}>
                     {
                      facilities.map((item)=>(
                        <DropdownMenuItem key={item.key}>
                          <Link href={`${item.href}`}>
                          {item.label}
                          </Link>
                          </DropdownMenuItem>
                      
                      ))
                    }
                     </DropdownMenuContent>
                  
                    </div> }
            </DropdownMenu>
     
            
            </Link>
        )
     })}
    </div>
  )
}

export default Navlinks