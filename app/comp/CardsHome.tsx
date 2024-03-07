
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { LibraryBig,Globe2,Award,MoveRight} from 'lucide-react';

import Link from 'next/link';
  interface CardsHomeProps {
    name: string;
    description: string;
    href:string;
  }
  
  const CardsHome: React.FC<CardsHomeProps> = ({ name, description,href }) => {
    return (
<Card className='rounded-lg border-2 border-primary p-2 m-4 max-w-[80%] lg:max-w-[50%] mx-auto bg-card text-card-foreground hover:bg-muted hover:text-muted-foreground cursor-pointer  '>
       
          <CardContent>
          <CardHeader className='flex-row  '>
            <div>
            {name==='Distinction' && <LibraryBig height={40} width={40}  /> ||
             name==='State Rankers' && <Globe2 height={40} width={40}/>||
             name==='Placements' && <Award height={40} width={40}/>
            }
            </div>
           
            <CardTitle className='text-primary font-extrabold text-2xl text-center tracking-normal '>
            
              {name}
      </CardTitle>
          </CardHeader>
            <CardDescription className='text-muted-foreground text-md'>{description}</CardDescription>

          </CardContent>
          <CardFooter className='cursor-pointer underline underline-offset-1'>
            <Link href={href} > ReadMore</Link>
           <MoveRight/></CardFooter>
      </Card>
      
      
    )
  }
  
  export default CardsHome;
  