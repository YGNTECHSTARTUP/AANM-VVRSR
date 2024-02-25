"use client"
import * as React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel"
import { campusCarouselItems } from "@/constants"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
export function CarouselSpacing() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000 })
      )
  return (
    
        <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}  
        className="w-full flex justify-center">
      <CarouselContent className="-ml-1">
        {campusCarouselItems.map((item) => (
          <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6 -mt-[15%]">
                <Image src={item.imgurl} alt={item.name} width={1000} height={1000}/>
                </CardContent>
                <CardFooter className="font-sans font-extrabold text-2xl bg-muted -mt-[18%]">{item.name}</CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
   
    </Carousel>
    
  
  )
}
export default CarouselSpacing