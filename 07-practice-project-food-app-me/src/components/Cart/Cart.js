import React from 'react';

import Card from './../UI/Card/Card';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
	return (
		<Card>
			{props.DUMMY_MEALS.map((item) => {
				return (
					<CartItem
						key={item.id}
						name={item.name}
						price={item.price}
						onAdd={''}
						onRemove={''}
					/>
				);
			})}
		</Card>
	);
};

export default Cart;
