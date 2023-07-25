import Link from 'next/link';
import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export default function Sidebar() {
    const [nav, setNav] =useState(false)
    const handleNav=()=>{
      setNav(!nav)  
    }
  return (
    <div>
     	<div onClick={handleNav} className="xl:hidden ml-[20rem] bottom-7 relative ">
				 {!nav ? <AiOutlineMenu size={30}/>: < AiOutlineClose size={30}/> }
				</div>

			<div
				className={
					nav
						? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
						: ''
				}>
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-1/2 bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}>
					<div className=" relative flex bottom-4  w-full items-center justify-between">
						
						
          </div>
					</div>
          </div>        
    </div>
  )
}
