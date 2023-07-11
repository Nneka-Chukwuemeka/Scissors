'use client';
import Button from './Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth';

const SignIn = ({ type }) => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const { register, loading } = useAuth();
	const router = useRouter();
	const handleSubmit = (e) => {
		setError(null);
		e.preventDefault();
		try {
			const authUser = register(email, password, username);
			console.log(authUser);
			router.push('/');
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<section className="pt-10 flex flex-col md:justify-center px-7 md:w-[560px] md:mx-auto">
			<h3 className="pb-4 text-center">{type ? type : 'Sign Up with'}</h3>
			<div className="flex flex-col py-3 gap-3 w-full md:flex-row md:gap-10  md:justify-center">
				<Button className=" w-full md:w-[50%] rounded-[12px]">
					Google
				</Button>
				<Button className="rounded-[10px] w-full md:w-[50%] ">
					Apple
				</Button>
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
							type="text"
							placeholder="Type Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="input rounded-[6px] border-primary border w-full py-[0.3rem] px-[0.75rem]"
						/>
					</div>
					<div className="form-group w-full">
						<input
							type="e-mail"
							placeholder="Type Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="input rounded-[6px] border-primary border w-full py-[0.3rem] px-[0.75rem]"
						/>
					</div>
					<div className="flex gap-[0.7rem]  ">
						<input
							type="password"
							className="input"
							placeholder="Type password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Button
						className="flex justify-center items-center"
						type="submit">
						Sign up with email
					</Button>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
