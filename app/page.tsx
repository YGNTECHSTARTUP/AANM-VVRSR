import CardsHome from './comp/CardsHome'
import { CarouselPlugin } from './comp/Carousal'
import React from 'react'
import { CardHomeItems } from '@/constants'
import AboutCollage from './comp/AboutCollage'
import MarqueeSection from './comp/MarqueeSection'
import CampusCarousel from './comp/CampusCarousel'
import VideoComp from './comp/VideoComp'
import { CarouselSize } from './comp/CarouselSize'
import Footer from './comp/Footer'
const page = () => {
  return (
    <div className='flex-col lg:z-0 lg:absolute overflow-hidden '>
    <CarouselPlugin />
    <div className='-mt-[30%] lg:flex lg:flex-auto gap-5 lg:-mt-[40%] lg:z-40 lg:absolute  '>
    {
      CardHomeItems.map((item) => (
        <CardsHome key={item.name} name={item.name}  description={item.description} />
      ))
    }
    </div>
   <AboutCollage/>
   <MarqueeSection/>
   <div>
      <h1 className='text-center text-2xl font-bold text-orange-500'>On Going Campus Life</h1>
      <h1 className='text-center text-4xl font-bold'>Get The Best Campus Life</h1>
   </div>
   <br/>
   <CampusCarousel/>
   <br></br>
   <VideoComp/>
   <h1 className='text-center text-4xl font-bold text-orange-500'>Our Leading Recruiters</h1>
   <CarouselSize/>
   <Footer/>
   </div>
    
  )
}

export default page