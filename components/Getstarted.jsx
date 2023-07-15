import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Getstarted() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	  }, []);
	return (
		<div  data-aos="fade-up">
			<section className="  ">
				<div className=" p-10  items-center text-center ">
					<h1 className=" text-white text-4xl ">
						Revolutionizing Link Optimization{' '}
					</h1>
					<div className=" p-4 ">
						<button className=" bg-primary py-3 px-7 text-xl rounded-3xl font-semi-bold text-white">
							Select Pricing
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
