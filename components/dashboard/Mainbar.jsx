'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import {UserAuth} from '@/context/Authcontext'

export default function Mainbar() {
  const router = useRouter();
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/')
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className=' text-center'> 
    <p>Welcome!</p>
      <p>Username:{user && user.email}</p>
      <button onClick={handleLogout} className=' border px-6 py-2 my-2'>Logout</button>
    </div>
  )
}
