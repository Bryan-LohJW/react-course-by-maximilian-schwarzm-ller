import React, { useState, useReducer } from 'react';

import MealsSummary from './components/Food/MealsSummary';
import Header from './components/UI/Header/Header';
import AvailableMeals from './components/Food/AvailableMeals';
import Modal from './components/UI/Modal/Modal';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Sushi',
		description: 'Finest fish and veggies',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Schnitzel',
		description: 'A german specialty!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Barbecue Burger',
		description: 'American, raw, meaty',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Green Bowl',
		description: 'Healthy...and green...',
		price: 18.99,
	},
];

const cartReducer = (state, action) => {
	const newMap = state.cartMap;
	if (newMap.has(action.id)) {
		newMap.set(action.id, newMap.get(action.id) + action.quantity);
	} else {
		newMap.set(action.id, action.quantity);
	}
	return {
		cartSize: state.cartSize + action.quantity,
		cartTotal: state.cartTotal + action.price * action.quantity,
		cartMap: newMap,
	};
};

function App() {
	const [cartState, dispatchCart] = useReducer(cartReducer, {
		cartSize: 0,
		cartTotal: 0,
		cartMap: new Map(),
	});

	const [isAdded, setIsAdded] = useState(false);

	const onAddItem1 = () => {
		setIsAdded(false);
	};
	const onAddItem2 = () => {
		setIsAdded(true);
	};

	const addMealHandler = (meal) => {
		dispatchCart(meal);
		onAddItem1();
		onAddItem2();
	};

	return (
		<div>
			{false && <Modal></Modal>}
			<Header
				title="ReactMeals"
				itemCount={cartState.cartSize}
				isAdded={isAdded}
			/>
			<MealsSummary />
			<AvailableMeals
				DUMMY_MEALS={DUMMY_MEALS}
				onAddMeal={addMealHandler}
			/>
		</div>
	);
}

export default App;
