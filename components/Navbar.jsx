'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../public/assets/Logo.svg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
export default function Navbar() {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	const router = useRouter();
	const handleRouting = () => {
		router.push('/signup');
	};
	const isLoggedIn = false;
	return (
		<div className=" fixed w-full h-20 shadow-xl z-[100] bg-slate-200 ">
			<section className="  flex justify-between items-center w-full h-full px-16 2xl:px-16 ">
				<div className=" ">
					<Image
						className=" "
						src={Logo}
						alt="/"
						height={50}
						width={120}
					/>
				</div>
				<ul className=" list-none hidden xl:flex  space-x-10 text-xl ">
					<li className=" text-[#0065FE]">
						<Link href="/">My URLs</Link>
					</li>

					<li className="">
						<Link href="/">Features</Link>
					</li>

					<li className="">
						<Link href="/">Pricing</Link>
					</li>
					<li>
						<Link href="/">Anayltics</Link>
					</li>
					<li>
						<Link href="/">FAQs</Link>
					</li>
				</ul>
				{isLoggedIn ? (
					<ul className=" flex px-12  space-x-8">
						<button>Logout </button>
						<button className=" hidden md:block rounded-3xl bg-[#0065FE] text-white py-2 px-3 ">
							profile
						</button>
					</ul>
				) : (
					<ul className=" flex px-12  space-x-8">
						<button>Login</button>
						<Link
							href="/signup"
							className=" hidden md:block rounded-3xl bg-[#0065FE] text-white py-2 px-3 ">
							Try for free
						</Link>
					</ul>
				)}
				<div className="xl:hidden">
					<AiOutlineMenu size={25} onClick={handleNav} />
				</div>
			</section>
			<div
				className={
					nav
						? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
						: ''
				}>
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}>
					<div className=" relative flex bottom-4  w-full items-center justify-between">
						<Link href="/">
							<Image src={Logo} width="87" height="35" alt="/" />
						</Link>
						<div
							onClick={handleNav}
							className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
							<AiOutlineClose />
						</div>
					</div>

					<section className=" py-10 flex flex-col ">
						<ul className=" uppercase ">
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-10 text-xl mt-[-2rem]">
									My URLs
								</li>
							</Link>
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-10 text-xl mt-[-2rem]">
									Features
								</li>
							</Link>
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-10 text-xl mt-[-2rem]">
									Pricing
								</li>
							</Link>
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-10 text-xl mt-[-2rem]">
									Anayltics
								</li>
							</Link>
							<Link href="/">
								<li
									onClick={() => setNav(false)}
									className="py-10 text-xl mt-[-2rem]">
									FAQs
								</li>
							</Link>

							<Link href="/">
								<li className=" py-10 text-xl mt-[-2rem]">
									<button
										onClick={() => setNav(false)}
										className=" rounded-3xl bg-[#0065FE] text-white py-3 px-4">
										Try for free
									</button>
								</li>
							</Link>
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
}
