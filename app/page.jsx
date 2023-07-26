'use client';
import React, { useEffect, useState } from 'react';
import About from '@/components/About';
import Pricingplan from '@/components/Pricingplan';
import Hero from '@/components/Hero';
import '../styles/loader.css';
import Form from '@/components/Form';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Getstarted from '@/components/Getstarted';
import Footer from '@/components/Footer';
import Faqs from '@/components/Faqs';
import Sidebar from '@/components/dashboard/Sidebar';
const Home = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 3000);

		const loaderState = sessionStorage.getItem('loading');

    if (loaderState) {
      // If the loader state exists in sessionStorage, set the loaderVisible state accordingly
      setLoading(loaderState === 'true');
    } else {
      // If the loader state does not exist in sessionStorage, set the default value (true in this case)
      sessionStorage.setItem('loading', 'false');
    }
	}, []);

	useEffect(() => {
		// Save the loaderVisible state in sessionStorage whenever it changes
		sessionStorage.setItem('loading', loading.toString());
	  }, [loading]);
	
	return (
		<>
			{loading ? (
				<section className="">
					<Navbar />
					<Hero />
					<About />

					<Pricingplan />
					<Container className="w-full flex justify-center items-center p-[1rem] md:p-[2.5rem] h-[25rem] lg:h-[32.6875rem] bg-container">
						<Form />
					</Container>
					<Faqs />
					<Container className="w-full flex justify-center items-center p-[1rem] md:p-[2.5rem] h-[25rem] bg-container">
						<Getstarted />
					</Container>
					<Footer />
					<Sidebar />
				</section>
			) : (
				<div className="w-screen bg-black  h-screen left-0 top-0 flex flex-col justify-center">
					<div className="loader  mx-auto w-10/12"></div>
				</div>
			)}
		</>
	);
};

export default Home;