import { Fragment, useState, useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import useHttp from '../../hooks/use-http';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const [isClicked, setIsClicked] = useState(false);
	const { isLoading, error, sendRequest } = useHttp();

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	};

	const cartOrderHandler = (event) => {
		event.preventDefault();
		const items = {};
		cartCtx.items.map((item) => {
			items[`${item.name}`] = item.amount;
		});
		items['totalAmount'] = cartCtx.totalAmount;
		console.log(items);
		setIsClicked(true);

		const requestConfig = {
			url: 'https://react-http-9c2ae-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',
			method: 'POST',
			header: {
				'Content-Type': 'application/json',
			},
			body: items,
		};
		sendRequest(requestConfig, (data) => {
			console.log(data);
		});

		if (!error) {
			cartCtx.resetCart();
		}
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const isOrderSuccess = !isLoading && isClicked && !error;

	return (
		<Modal onClose={props.onClose}>
			<form onSubmit={cartOrderHandler}>
				{cartItems}
				<div className={classes.total}>
					<span>Total Amount</span>
					<span>{totalAmount}</span>
				</div>
				{isLoading && <div>Sending your order</div>}
				{isOrderSuccess && <div>Order sent</div>}
				{error && (
					<div>Failed to send order, please try again, {error}</div>
				)}
				<div className={classes.actions}>
					<button
						className={classes['button--alt']}
						onClick={props.onClose}
					>
						Close
					</button>
					{hasItems && (
						<button className={classes.button} type="submit">
							Order
						</button>
					)}
				</div>
			</form>
		</Modal>
	);
};

export default Cart;
