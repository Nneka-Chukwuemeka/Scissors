'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Nav = () => {
	const [toggle, setToggle] = useState(false);
	const loggedIn = true;
	return (
		<nav className="nav">
			<Link href="/">
				<Image
					src="/assets/Logo.svg"
					width={80}
					height={80}
					alt="logo "
				/>
			</Link>
			{/* Desktop */}
			{loggedIn ? (
				<>
					<div className="flex gap-5">
						<Link href="/url">My Urls</Link>
						<div>features</div>
						<Link href="/pricing">Pricing</Link>
						<Link href="/analytics"> Analytics</Link>
						<Link href="#faq"> FAQ</Link>
					</div>
					<div className="flex">
						<Link href="/login">Log In</Link>
						<Link href="/signup"> Try for Free</Link>
					</div>
				</>
			) : (
				<div></div>
			)}
		</nav>
	);
};

export default Nav;
