import React from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon';

const HeaderCartButton = (props) => {
	return (
		<div className={`${classes.button} ${props.isAdded && classes.bump}`}>
			<CartIcon className={classes.icon} />
			Your Cart
			<div className={classes.badge}>{props.itemCount}</div>
		</div>
	);
};

export default HeaderCartButton;
