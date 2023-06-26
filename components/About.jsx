import AboutCard from './AboutCard';

const About = () => {
	return (
		<section>
			<div className="flex justify-between">
				<AboutCard type="one stop" />
				<div className="flex justify-between">
					<AboutCard type="3M" />
					<AboutCard type="60M" />
				</div>
				<div className=" flex justify-between">
					<AboutCard type="1B" />
					<AboutCard type="300k" />
				</div>
			</div>
			<div className="flex justify-between">
				<div>
					<AboutCard type="why" />
				</div>
				<div>
					<div className="flex justify-between flex-wrap">
						<AboutCard type="url" />
						<AboutCard type="custom" />
					</div>
					<div className="flex justify-between flex-wrap">
						<AboutCard type="Qr" />
						<AboutCard type="data" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
