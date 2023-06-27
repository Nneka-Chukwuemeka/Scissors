import AboutCard from './AboutCard';

const About = () => {
	return (
		<section className="flex flex-col py-[3.5rem] px-8 lg:px-16 gap-8 w-full ">
			<div className="flex flex-col  w-full max-w-full mx-auto lg:flex-row lg:justify-between gap-[3rem]  lg:gap-[7.5rem] ">
				<AboutCard
					type="one stop"
					className="flex-initial w-full text-center lg:w-[40%]"
				/>
				<div className="flex flex-col items-stretch md:flex-row md:grow w-full  lg:w-[60%] md:justify-between lg:gap-[4.5rem] ">
					<div className="flex justify-between lg:gap-[4.5rem] ">
						<AboutCard type="3M" />
						<AboutCard type="60M" />
					</div>
					<div className=" flex  lg:gap-[4.5rem]  lg:justify-between">
						<AboutCard type="1B" />
						<AboutCard type="300k" />
					</div>
				</div>
			</div>
			<div className="flex  flex-col lg:flex-row justify-between gap-[6rem] ">
				<div className="flex-initial w-full lg:w-[31%]">
					<AboutCard type="why" />
				</div>
				<div className="flex flex-col w-full lg:grow gap-[4rem] lg:w-[79%]">
					<div className="flex flex-col md:flex-row justify-between gap-[4rem]">
						<AboutCard type="url" />
						<AboutCard type="custom" />
					</div>
					<div className="flex flex-col md:flex-row justify-between gap-[4rem]">
						<AboutCard type="Qr" />
						<AboutCard type="data" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
