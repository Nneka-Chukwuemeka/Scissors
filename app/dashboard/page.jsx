import Mainbar from '@/components/dashboard/Mainbar'
import Accountprotected from '@/components/Accountprotected'
import React from 'react'
import SignIn from '@/components/SignIn'
import Sidenavbar from '@/components/dashboard/Sidenavbar'
import dashboadcontainer from '@/components/dashboadcontainer'
import Dashboadcontainer from '@/components/dashboadcontainer'
export default function login() {
  return (
    <div className='' >
    	   <Mainbar/>
      <Accountprotected> <Mainbar/></Accountprotected>
  
    </div>
  )
}
