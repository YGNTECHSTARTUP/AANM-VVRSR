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
  interface CardsHomeProps {
    name: string;
    description: string;
  }
  
  const CardsHome: React.FC<CardsHomeProps> = ({ name, description }) => {
    return (
      <Card className='rounded-lg border-2 border-primary p-2 m-4 max-w-[80%] lg:max-w-[50%] mx-auto bg-card hover:bg-muted cursor-pointer lg:opacity-80 '>
          <CardHeader className='flex-row '>
            <div>
            {name==='Distinction' && <LibraryBig height={40} width={40} /> ||
             name==='State Rankers' && <Globe2 height={40} width={40}/>||
             name==='Placements' && <Award height={40} width={40}/>
            }
            </div>
           
            <CardTitle className='text-primary font-extrabold text-xl '>{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-muted-foreground'>{description}</CardDescription>

          </CardContent>
          <CardFooter className='cursor-pointer underline underline-offset-1'>ReadMore<MoveRight/></CardFooter>
      </Card>
    )
  }
  
  export default CardsHome;
  