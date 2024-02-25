import { about, achievements, departments, facilities, quickLinks } from '@/navigationconstants'
import React from 'react'

export const Footer = () => {
  return (
    <div>
    <footer className="bg-[#0d3b66] text-white">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="mb-6 lg:mb-0">
          <h5 className="font-extrabold mb-4 underline decoration-orange-500">Quick Links</h5>
          <ul className="space-y-2">
            <li>
             
                {
                    quickLinks.map((item)=>(
                        <a className="hover:underline " href="#">
                            {item.label}
                            <br/>
                        </a>
                        
                    
                    ))
                }
            
            </li>
          </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h5 className="font-extrabold mb-4 underline skew-x-6 decoration-orange-500">Facilities</h5>
          <ul className="space-y-2">
            <li>
                {
                    facilities.map((item)=>(
                        <a className="hover:underline" href="#">
                            {item.label}
                            <br/>
                        </a>))}
                    
                
            
            </li>
          </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h5 className="font-extrabold mb-4 underline decoration-orange-500">Departments</h5>
          <ul className="space-y-2">
            <li>
                {
                    departments.map((item)=>(
                        <a className="hover:underline" href="#">
                        {item.label}
                        <br/>
                    </a>)
                    )
                }
            </li>
            </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h5 className=" mb-4 font-extrabold underline decoration-orange-500">Our About</h5>
          <ul className="space-y-2">
           <li>
      {
        about.map((item)=>(
            <a className="hover:underline" href="#">
            {item.label}
            <br/>
        </a>)
        )
      }
           </li>
            
          </ul>
        </div>
        <div className="mb-6 lg:mb-0">
          <h5 className="font-extrabold mb-4 font-sans  underline decoration-orange-500 ">Achievements</h5>
          <ul className="space-y-2">
            <li>
                {
                    achievements.map((item)=>(
                        <a className="hover:underline" href="#">
                        {item.label}
                        <br/>
                    </a>)
                    )
                }
              </li>
          </ul>
        </div>
     
      
      </div>
      <div className="bg-[#e76f51] py-4  bottom-0 w-full left-0">
        <p className="text-center text-sm">© 2023 AANM-VVRSR polytechnic College . Powered By <span className='font-extrabold text-primary-foreground'>CME3E</span></p>
      </div>
    </footer>
  

    </div>
  )}
