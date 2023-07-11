import '@/styles/global.css';
import React from 'react';
import Navbar from '@/components/Navbar';
export const metadata = {
	title: 'Scissors',
	description:
		'Scissor is a simple tool which makes URLs as short as possible',
};

const layout = ({ children }) => {
	
	return (
		<html lang="en">
			
			<body>
				<main className="app">
				
					{children}
				</main>
			</body>
			
		</html>
	);
};

export default layout;
