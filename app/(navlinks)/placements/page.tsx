import React from 'react'
import Reusable from '@/app/comp/Reusable'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title:"Placements" }
const page = () => {
  return (
    <div>
    <Reusable name="PLACEMENTS" parent='/placements'/>
    <div className="max-w-4xl mx-auto my-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sl.No</TableHead>
            <TableHead>Company name</TableHead>
            <TableHead>Annual salary package</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>No. Selected</TableHead>
          
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Thought Works</TableCell>
            <TableCell>8 Lakhs</TableCell>
            <TableCell>2024</TableCell>
            <TableCell>08</TableCell>
       
            <TableCell>
              <Link href={"/placements/thoughtworks"}>
              <Button className="text-right" variant="ghost">
                Details
              </Button>
              </Link>
             
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Texas</TableCell>
            <TableCell>8.6 Lakhs</TableCell>
            <TableCell>2024</TableCell>
            <TableCell>02</TableCell>
          
            <TableCell>
            <Link href={"/placements/texas"}>
              <Button className="text-right" variant="ghost">
                Details
              </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    </div>
  )
}

export default page