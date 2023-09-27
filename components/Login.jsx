'use client';
import Button from './Button';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {UserAuth} from '@/context/Authcontext'
export default function Login() {
    const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const router = useRouter();
	const { signIn } = UserAuth();
	const handleSubmit = async  (event) => {
			event.preventDefault();  
			setError('')
			try {
			  await signIn(email, password)
			  router.push('/dashboard')  
			} catch (e) {
			  setError(e.message)
			  console.log(e.message)
			}
		  
	};
  return (
    <div>
      <section className="pt-10 flex flex-col md:justify-center px-7 md:w-[560px] md:mx-auto mb-10">
			<h3 className="pb-4 text-center text-bold text-3xl ">Sign in to scissors
            </h3>
	
		
			<div className="flex flex-col py-3 gap-3 w-full md:flex-row md:gap-10  md:justify-center">
			
			</div>
			<div className="flex justify-center items-center gap-2">
				<hr className="w-full" />
				<p> or</p>
				<hr className="w-full" />
			</div>
			<div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-[1rem]">
					
					<div className="form-group w-full">
						<input
							type="e-mail"
							required
							placeholder="Type Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="input rounded-[6px] border-primary border w-full py-[0.3rem] px-[0.75rem]"
						/>
					</div>
					<div className="flex gap-[0.7rem]  ">
						<input
							type="password"
							required
							className="input"
							placeholder="Type password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className=' text-center'>Don&apos;t have an account yet?<Link  	href="/sign-up" className=' underline'>  Sign Up</Link></div>
					<Button
					   onSubmit={handleSubmit}
						className="flex justify-center items-center"
						type="submit">
						Sign In 
					</Button>
				</form>
			</div>
		</section>
    </div>
  )
}
