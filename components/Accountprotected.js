'use client';
import React, { Children, useEffect, useState } from 'react'
import {UserAuth} from '../context/Authcontext'
import { useRouter } from 'next/navigation';

export default function Accountprotected({Children}) {
    const router = useRouter();
    const {emailuser} = UserAuth()
    if (!emailuser) {
        return  router.push('/sign-up')
      }
    return Children;
}
