'use client';
import React, { Children, useEffect } from 'react'
import {UserAuth} from '../context/Authcontext'
import { useRouter } from 'next/navigation';
export default function Accountprotected({Children}) {
    const router = useRouter();
    const {User} = UserAuth()
  
    if(!User){
        return(
            router.push('/login')
        )
    }
  return  Children;
}
