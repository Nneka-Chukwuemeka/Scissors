import About from '@/components/About';
import Pricingplan from '@/components/Pricingplan';
import Hero from '@/components/Hero';

import Form from '@/components/Form';
import Container from '@/components/Container';

import Getstarted from '@/components/Getstarted';
import Footer from '@/components/Footer';
import Faqs from '@/components/Faqs';
const Home = () => {
	return (
		<section className="mt-[3rem] lg:mt-[6rem] z-1 w-full">
			<Hero />
			<About />

			<Pricingplan />
			<Container className="w-full flex justify-center items-center p-[1rem] md:p-[2.5rem] h-[25rem] lg:h-[32.6875rem] bg-container">
				<Form />
			</Container>
			<Faqs/>
			<Container className="w-full flex justify-center items-center p-[1rem] md:p-[2.5rem] h-[25rem] bg-container">
				<Getstarted />
			</Container>
			<Footer/>
		</section>
	);
};

export default Home;
