import Mainbar from '@/components/dashboard/Mainbar'
import Accountprotected from '@/components/Accountprotected'
import React from 'react'
import SignIn from '@/components/SignIn'
export default function login() {
  return (
    <div className=' mt-[3rem] lg:mt-[4rem] z-1 w-full' >
       <Mainbar/>
    <Accountprotected> <Mainbar/></Accountprotected>
    </div>
  )
}
