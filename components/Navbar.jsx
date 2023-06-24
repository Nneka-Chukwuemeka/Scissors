
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/assets/Logo.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export default function Navbar() {
  return (
    <div>
      <section className='  flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <ul className=' hidden text-red-600 list-none '>
          <li className=''> 
             <Link href='/'>My URLs</Link>
          </li>

          <li className=''>
             <Link href='/'>Features</Link>
          </li>

          <li className=''>
             <Link href='/'>Pricing</Link>
          </li>
          <li>
             <Link href='/'>Anayltics</Link>
          </li>
          <li>
             <Link href='/'>FAQs</Link>
             
          </li>
          </ul>
      </section>
    </div>
  )
}
