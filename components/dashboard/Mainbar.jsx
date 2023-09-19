'use client'
import React, { useState } from 'react';
import avater from '@/public/assets/placeholder.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/Authcontext';
import { AiFillCaretDown} from 'react-icons/ai';
import Sidenavbar from './Sidenavbar';
import Logo from '@/public/assets/Logo.svg';
import Link from 'next/link';

export default function Mainbar() {
  const router = useRouter();
  const { emailuser, logout } = UserAuth();
  const [userprofile, Setuserprofile]=useState(false);

  const Userprofilefn=()=>{
 Setuserprofile(!userprofile);
  }

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  const email = emailuser?.email || ''; // Default to an empty string if emailuser is undefined

  const name = email.split('@')[0]; // Extract the name before the '@' symbol
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter of the name

  const formattedEmail = email.length > 7 ? email.substring(0, 7) + '.' + email.substring(7) : email;

  const cleanedFormattedEmail = formattedEmail.replace('.@gmail.com', '');

  return (
    <div className='text-center text-white bg-slate-600  w-full h-screen   '>

      <section className=' flex flex-row items-center justify-between pt-4  relative  '>
         <div> <Image className='' src={Logo} alt='/' height={50} width={120} /></div>
         <div className=' bg-black  py-3 p-4 rounded-full shadow-sm hover:shadow-md transition cursor-pointer          
         '>
          <div className=' flex items-center space-x-2'>
          <Image className= ' border-neutral-200 cursor-pointer hover:shadow-md transition rounded-full' src={avater} alt='/' height={50} width={30} />
          <p className='  pr-[rem] '>{formattedName}</p>
          <div onClick={Userprofilefn} >
          < AiFillCaretDown size={18}  />
          </div>
      
          </div>
         
        </div>
      </section>

 <div
 
 className={
  userprofile
    ? ' fixed right-0 top-20 w-[42%] sm:w-[40%] md:w-[21%] lg:w-[13%] bg-[#424549] p-10 mt-4 mr-3 lg:mt-6 rounded-lg pr-6 '
    : 'fixed left-[-100%] top-0 p-10 ease-out duration-500'
}

 >
 <section className='  '>
  <ul className='space-y-4 text-sm -mt-4 -mb-5 '>
    <button className='    '  > <Link href='/#about'>My Profile</Link> </button>
              
          

            <button>
            <Link href='/#about'>Change Password</Link>
            </button>
             
            


            <button  onClick={handleLogout}
            className='border px-6 py-2 my-2 rounded-3xl bg-[#0065FE] text-white'>
            <Link href='/#about'>Logout</Link>
            </button>
             
            
  </ul>

 </section>

 </div>

      <div className=' mt-12'>
      <h1 className=' text-5xl mb-8 md:left '>Short Your Looooooog Links :) </h1>
        <div> 
         
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options to
          reinforce your brand presence and enhance user engagement.
          <p>Username: {email}</p>
         <div className=' p-6' >
         <button
          
          className=' px-6 py-2 my-2 rounded-3xl bg-[#0065FE] text-white'
        >
          Create Short Link
        </button>
         </div>
        </div>
      </div>
    </div>
  );
}
