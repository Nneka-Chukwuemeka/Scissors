import React from 'react';

const Container = (props) => {
	const { children, className, ...prop } = props;
	return (
		<div className={`${className} relative contain mb-[2rem]`}>
			<div className="back" />
			{children}
		</div>
	);
};

export default Container;
