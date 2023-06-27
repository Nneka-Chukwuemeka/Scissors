import About from '@/components/About';
import Hero from '@/components/Hero';

const Home = () => {
	return (
		<section className="mt-[3rem] lg:mt-[6rem] z-1 w-full">
			<Hero/>
			<About />
		</section>
	);
};

export default Home;
