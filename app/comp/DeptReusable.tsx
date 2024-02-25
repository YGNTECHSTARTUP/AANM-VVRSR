import React from 'react'
import Reusable from './Reusable'
interface DeptReusableProps {
    imgurl:string,
    desc?:string,
    name?:string,
    vision?:string,
    mission?:string
}
const DeptReusable:React.FC<DeptReusableProps> = ({imgurl,desc,name,vision,mission}) => {
  return (
    <div>
        <Reusable name={name} />
     <Image
       alt="Background"
       className="absolute inset-0 h-full w-full object-cover opacity-50"
       height={500}
       src={imgurl}
       width={500}/>
    <h1 className='font-sans text-4xl font-extrabold'>About Department</h1>
    <p className='font-sans text-md'>{desc}</p>
    <h1 className='font-sans text-4xl font-extrabold'>Vision</h1>
    <p className='font-sans text-md'>{vision}</p>
    <h1 className='font-sans text-4xl font-extrabold'>Mission</h1>
    <p className='font-sans text-md'>{mission}</p>
    </div>
  )
}

export default DeptReusable