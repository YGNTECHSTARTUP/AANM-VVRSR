
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface ReusableProps {
  name:string
    
}
const Reusable:React.FC<ReusableProps> = ({name}) => {
  return (
    <div className='mx-auto'>
              <div className="relative mt-24 bg-[#0c4a6e] h-[40vh] container w-[100%] text-white">
        <Image
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          height={500}
          src="/assets/collage.png"
        
          width={500}
        />
        <div className="relative z-10 flex flex-col  items-center justify-center space-y-6 py-16">
          <h1 className="text-6xl font-extrabold mt-24 ">{name}</h1>
       <Button className='bg-orange-500 '><Link href={"/"}>Home
       </Link><span className='mx-2'>|</span>{name}</Button>
        </div>
      </div>
    </div>
  )
}

export default Reusable