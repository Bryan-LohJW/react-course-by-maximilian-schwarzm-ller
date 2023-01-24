import React, { useRef } from 'react';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
	const inputQuantityRef = useRef();

	const addMealHandler = (event) => {
		event.preventDefault();
		const meal = {
			id: props.mealId,
			price: +props.price,
			quantity: +inputQuantityRef.current.value,
		};
		props.onAddMeal(meal);
	};

	return (
		<form className={classes.form} onSubmit={addMealHandler}>
			<input type="number" step={1} min={1} ref={inputQuantityRef} />
			<button type="submit">+ Add</button>
		</form>
	);
};

export default MealItemForm;
