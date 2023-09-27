import Mainbar from '@/components/dashboard/Mainbar'
import Accountprotected from '@/components/Accountprotected'
import React from 'react'
export default function login() {
  return (
    <div className='' >
    	   <Mainbar/>
      <Accountprotected> <Mainbar/></Accountprotected>
  
    </div>
  )
}
