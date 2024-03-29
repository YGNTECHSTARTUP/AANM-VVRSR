import { Mission, paragraphs } from '@/constants'
import { Goal, MoveRight, Telescope } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const MarqueeSection = () => {
 
  return (
    <div className="m-2 md:flex max-w-7xl mx-auto my-8 bg-gray-300 dark:bg-muted rounded-lg ">
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-4 underline">Upcoming News</h2>
      <div className='container'  >
        {
            paragraphs.map((para)=>{
                return <div className='flex p-2'>
                <MoveRight height={15} width={55}/> <Link href={para.content} key={para.id} className='underline hover:text-primary -mt-1 my-4'>{para.content}</Link>

                </div>
            })
        }
        

      </div>
    </div>


    <div className="flex-1 ml-8">
      <h2 className="text-4xl font-bold mb-4 underline flex"><Telescope height={35} width={35}/>Our Vision</h2>
      <p className="mb-4">
        The Polytechnic aims to become a National level premier institute in providing value based quality technical
        education in the field of Diploma Engineering that has the potential to produce competent human resource to
        cater the Industrial and Societal needs.
      </p>
      <h1 className="text-4xl font-bold mb-4 underline flex"><Goal  height={35} width={35}/>Our Mission</h1>
     {
         Mission.map((mission)=>{
            return  <ul key={mission.id}>
              <li >{mission.content}</li>
              </ul>
         })
     }
    </div>
  </div>
)
}
export default MarqueeSection