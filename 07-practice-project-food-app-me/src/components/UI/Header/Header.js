import React, { Fragment } from 'react';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<Fragment>
			<div className={classes.header}>
				<h1>{props.title}</h1>
				<HeaderCartButton
					itemCount={props.itemCount}
					isAdded={props.isAdded}
				/>
			</div>
			<div className={`${classes['main-image']} `}>
				<img alt="food display" src="meals.jpg" />
			</div>
		</Fragment>
	);
};

export default Header;
