import About from '@/components/About';
import Pricingplan from '@/components/Pricingplan';
const Home = () => {
	return (
		<section className="mt-[3rem] lg:mt-[6rem] z-1 w-full">
			<About />
			<Pricingplan/>
		</section>
	);
};

export default Home;
