import React from 'react';

const Button = (props) => {
	const { children, className, ...prop } = props;

	return (
		<button
			className={`px-12 py-3 rounded-[999px] bg-primary text-white ${className}`}
			{...prop}>
			{children}
		</button>
	);
};

export default Button;
