import '@/styles/global.css';
import React from 'react';
import { AuthUserProvider } from '@/context/auth';
export const metadata = {
	title: 'Scissors',
	description:
		'Scissor is a simple tool which makes URLs as short as possible',
};

const layout = ({ children, pageProps }) => {
	return (
		<html lang="en">
			<body>
				<AuthUserProvider {...pageProps}>
					<main className="app">{children}</main>
				</AuthUserProvider>
			</body>
		</html>
	);
};

export default layout;
