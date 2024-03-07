"use client";
import { TypewriterEffect} from '@/components/ui/typewriter-effect';
import React from 'react'
import { GraduationCap,MoveRight  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
interface keys {
  keys?: string
}
const AboutCollage:React.FC<keys> = ({keys}) => {
  const words = [
    {
      text: "A",
    },
    {
      text: "Few",
    },
    {
      text: "Words",
    },
    {
      text: "the",
    },
    {
      text: "AANM & VVRSR Polytechnic",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  
  return (
    <div className={`mx-auto  flex-row lg:flex lg:-mt-[14%] xl:-mt-[20%]  ${keys?" relative container w-[100%] lg:flex   lg:mt-[1%] xl:mt-[5%] ":""} `}>
    <div className='  flex-row mx-[15%] xl:mx-[20%] lg:text-xl basis-[50%]  '>
        <div className='flex '>
        <GraduationCap height={40} width={40} fill='orange' />
         <h1 className='text-orange-500 font-extrabold  font-sans'>About Our Polytechnic</h1>
        </div>
        <h1 className='text-3xl font-sans font-bold -mx-[20%] md:-mx-[56%] '>  <TypewriterEffect words={words} /></h1>
        <br></br>
        <ul className='decoration-primary list-disc basis-[70% ]'>
        <li>
        <p className='text-card-foreground font-normal font-sans text-xl  '>
        A.A.N.M & V.V.R.S.R Polytechnic was established in 1981 by Adsumilli Aswardha narayana Murthy and Valluripalli Venkata rama Seshadri rao Educational Society. In affilication to AP state board of Technical Education and Training, Hyderabad.
        </p>
        </li>
       <li>
        <p className='text-card-foreground font-normal font-sans text-md'>
The Polytechnic could achieve 45 STATE RANKS in engineering Diploma examnination till 2015 from which year the state goverment abolished the declaration of state ranks.
        </p>
       </li>
       <li>
       <p className='text-card-foreground font-normal font-sans text-md'>
        The Polytechnic was approved by AICTE. The Polytechnic was the Second Self Financing instutution in the state of Andhra Pradesh and the first of its kind in Krishna distrcit.<br/>

        </p>
       </li>
      
        </ul>
        <Link href='/about'>
        {
          keys ? "" :  <Button className='p-3 m-2 hover:bg-muted-foreground'>ReadMore<MoveRight/></Button>
       
        }
        </Link>
     
      </div>
      <div className={`flex aspect-square mr-[5%] basis-[50%]  items-center  justify-center m-[3%] ${keys?"lg:basis-[20%] lg:-ml-[17%] mt-[10%]  ":""} `}>
                <Image src={"/assets/collage.png"}  width={3000} height={1} alt='collage pic' className='rounded-lg shadow-2xl shadow-muted-foreground' />
            
                </div>
    </div>
    
  )
}

export default AboutCollage