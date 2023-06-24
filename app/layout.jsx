import '@/styles/global.css';
import Nav from '@/components/Nav';

export const metadata = {
	title: 'Scissors',
	description:
		'Scissor is a simple tool which makes URLs as short as possible',
};

const layout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>
				<main className="app">
					<Nav />
					{children}
				</main>
			</body>
		</html>
	);
};

export default layout;
