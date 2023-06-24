export const metadata = {
	title: 'Scissors',
	description:
		'Scissor is a simple tool which makes URLs as short as possible',
};

const layout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
			</body>
		</html>
		
	);
};

export default layout;
