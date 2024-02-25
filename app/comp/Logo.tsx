import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <div className='flex'>
      <Link href='/' className='flex'>
    <Image src={"/assets/logo.png"} alt='logo' height={25} width={75}/>
    <h1 className='text-foreground mt-[7%] font-extrabold'>AANM&VVRSR POLYTECHNIC</h1>      
    </Link></div>
  )
}

export default Logo