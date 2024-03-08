import Reusable from '@/app/comp/Reusable'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"Thoughtworks" }
const page = () => {
  return (
    <div>
 <Reusable name="ThoughtWorks" parent='/placements'/>
        <div className='mt-10 flex-col justify-center items-center container rounded-lg bg-card'>
<Image src="/assets/placement/thoughtworks.jpg" alt="ThoughtWorks" className='mx-auto' width={500} height={500} />
        
    <Table className='bg-card mt-6 text-card-foreground  '>
      <TableHeader className='bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground'>
      <TableRow>
      
      <TableHead>SI.NO</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>PIN-NO</TableHead>
    
      </TableRow>
      </TableHeader>
      <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>B.Malleswari</TableCell>
        <TableCell>21030-CM-029</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>G.R Surendra</TableCell>
        <TableCell>21030-CM-090</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>3</TableCell>
        <TableCell>G.Likhitha</TableCell>
        <TableCell>21030-CM-105</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>4</TableCell>
        <TableCell>K.Karthikeya</TableCell>
        <TableCell>21030-CM-140</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>5</TableCell>
        <TableCell>M.Pradeep</TableCell>
        <TableCell>21030-CM-183</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>6</TableCell>
        <TableCell>S.Hima Sai Charan</TableCell>
        <TableCell>21030-CM-286</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>7</TableCell>
        <TableCell>T.Sivaji Sai</TableCell>
        <TableCell>21030-CM-303</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>8</TableCell>
        <TableCell>G.Siddartha</TableCell>
        <TableCell>21030-EC-074</TableCell>
      </TableRow>
     
      </TableBody>
      
      
      
   
    </Table>
    </div>
    </div>
       

  )
}

export default page