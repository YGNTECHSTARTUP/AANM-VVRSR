import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const VideoComp = () => {
  return (
    <Card className="flex-row bg-cover container items-center imgee bg-no-repeat  ">
    <CardContent>
      <CardHeader className='basis-[50%]'>
        <CardTitle className="text-6xl font-bold text-white">We're <span className='text-orange-500 underline underline-offset-2'>AANM & VVRSR POLYTECHNIC</span><br/>& We're Diffirent</CardTitle>
        <CardDescription className="text-2xl font-normal text-white">Our community is being called to reimagine the future. As the only university where a renowned design school colleges,</CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-center  '>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oltJMs1uWEI?si=x8MHehGeFCMFCGAj&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>         </CardFooter>
    </CardContent>
  </Card>
  
  )
}

export default VideoComp