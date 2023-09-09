import Mainbar from '@/components/dashboard/Mainbar'
import Accountprotected from '@/components/Accountprotected'
import React from 'react'
import SignIn from '@/components/SignIn'
import Sidenavbar from '@/components/dashboard/Sidenavbar'
import Container from '@/components/Container';
export default function login() {
  return (
    <div className=' flex ' >
    	<Container className="w-full flex justify-center items-center p-[1rem] md:p-[2.5rem] h-[25rem] lg:h-[32.6875rem] bg-container">
						<Mainbar/>
					</Container>
      <Accountprotected> <Mainbar/></Accountprotected>
  
    </div>
  )
}
