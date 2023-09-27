import '@/styles/global.css';
import React from 'react';
import {AuthContextProvider} from '../context/Authcontext'
export const metadata = {
	title: 'Scissors',
	description:
		'Scissor is a simple tool which makes URLs as short as possible',
};
const layout = ({ children, pageProps }) => {

	return (
		<html lang="en">
			<body>
			
				<AuthContextProvider {...pageProps}>
					<main className="app">{children}</main>
				</AuthContextProvider>
			
			
				
			</body>
		</html>
	);
};

export default layout;