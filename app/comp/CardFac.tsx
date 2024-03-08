import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'
interface CardFacProps {
    id: number;
    imgurl: string;
}
const CardFac:React.FC<CardFacProps> = ({id,imgurl}) => {
  return (
    <Card key={id} className='hover:bg-muted'>
        <CardContent>
            <Image src={imgurl} alt={imgurl} width={500} height={500} />
        </CardContent>
    </Card>
  )
  
}

export default CardFac