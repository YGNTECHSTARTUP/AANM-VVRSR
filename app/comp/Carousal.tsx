"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,

 
} from "@/components/ui/carousel"
import { CarouselItems } from "@/constants"
import Image from "next/image"
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000 })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {CarouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div className=" -mt-[28%] h-fit w-fit">
            <div className="flex aspect-square items-center justify-center ">
                <Image src={item.carouselimg} alt={`carousel${item.id}`} width={3000} height={1} />
               
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
       
    </Carousel>
  )
}
