"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { Companies } from "@/constants"
import Image from "next/image"

export function CarouselSize() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000 })
  )
  return (
    <Carousel
    plugins={[plugin.current]}
   
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-[100%] p-[10%] mx-auto flex justify-center overflow-hidden"
    >
      <CarouselContent>
        {Companies.map((company) => (
          <CarouselItem key={company.key} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                 <Image src={company.imgurl} alt={company.name} width={400} height={400} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>
  )
}
