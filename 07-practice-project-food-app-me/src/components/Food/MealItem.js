import React from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
	return (
		<div className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<p className={classes.description}>{props.description}</p>
				<p className={classes.price}>{props.price}</p>
			</div>
			<div>
				<MealItemForm
					onAddMeal={props.onAddMeal}
					mealId={props.id}
					price={props.price}
				/>
			</div>
		</div>
	);
};

export default MealItem;
