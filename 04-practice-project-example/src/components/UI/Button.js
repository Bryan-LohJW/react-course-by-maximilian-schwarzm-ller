import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
	return (
		<button
			classname={classes.button}
			type={props.type || 'button'}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
