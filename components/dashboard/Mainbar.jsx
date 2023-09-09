'use client'
import React from 'react';
import avater from '@/public/assets/placeholder.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/Authcontext';
import Sidenavbar from './Sidenavbar';
import Logo from '@/public/assets/Logo.svg';

export default function Mainbar() {
  const router = useRouter();
  const { emailuser, logout } = UserAuth();

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
    <div className='text-center text-white'>

      <section className=' flex flex-row items-center justify-between -mt-[2rem] '>
         <div> <Image className='' src={Logo} alt='/' height={50} width={120} /></div>
         <div className=' bg-black px-2 py-3 rounded-full shadow-sm hover:shadow-md transition cursor-pointer          
         '>
          <div className=' flex flex-row '>
          <Image className= ' mr-12 border-neutral-200 cursor-pointer hover:shadow-md transition rounded-full' src={avater} alt='/' height={50} width={30} />
          <p className='  pr-[4rem] '>{formattedName}</p>
          </div>
         
        </div>
      </section>
      <div className=' mt-12'>
      
        <div>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options to
          reinforce your brand presence and enhance user engagement.
          <p>Welcome!</p>
          <p>Username: {email}</p>
          <button
            onClick={handleLogout}
            className='border px-6 py-2 my-2 rounded-3xl bg-[#0065FE] text-white'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
