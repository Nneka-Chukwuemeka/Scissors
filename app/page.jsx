import About from '@/components/About';
import Hero from '@/components/Hero';
import Form from '@/components/Form';
import Container from '@/components/Container';

const Home = () => {
	return (
		<section className="mt-[3rem] lg:mt-[6rem] z-1 w-full">
			<Hero />
			<About />
			<Container className="w-full flex justify-center items-center p-[1rem] md:p-[2.5rem] h-[25rem] lg:h-[32.6875rem] bg-container">
				<Form />
			</Container>
		</section>
	);
};

export default Home;
