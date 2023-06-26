const AboutCard = ({ type }) => {
	let heading, headingTwo, span, desc, icon;
	const handleType = (value) => {
		if (value.toLowerCase() === 'one stop') {
			heading = ' One Stop';
			headingTwo = 'Four';
			span = 'Possibilites';
		}
		if (value.toLowerCase() === '3m') {
			heading = '3M';
			headingTwo = '';
			span = '';
			desc = 'Active users';
		}
		if (value.toLowerCase() === '60m') {
			heading = '60M';
			desc = 'Links & QR codes created';
		}
		if (value.toLowerCase() === '1b') {
			heading = '1B';
			desc = 'Clicked & Scanned Connection';
		}
		if (value.toLowerCase() === '300k') {
			heading = '300K';
			desc = 'App Integrations';
		}
		if (value.toLowerCase() === 'why') {
			heading = 'Why Choose';
			span = 'Scissors';
			desc =
				'Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. ';
		}
	};
	handleType(type);
	return (
		<section>
			<h3> {heading}</h3>
			<h3>
				{headingTwo} <span>{span}</span>
			</h3>
			<p>{desc}</p>
		</section>
	);
};
export default AboutCard;
