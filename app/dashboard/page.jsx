import Mainbar from '@/components/dashboard/Mainbar'
import Accountprotected from '@/components/Accountprotected'
import React from 'react'
export default function login() {
  return (
    <div className=' mt-[3rem] lg:mt-[4rem] z-1 w-full' >
     <Mainbar/>
    <Accountprotected> <Mainbar/></Accountprotected>
    </div>
  )
}
