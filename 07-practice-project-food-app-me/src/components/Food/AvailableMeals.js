import React from 'react';

import MealItem from './MealItem';
import Card from '../UI/Card/Card';
import classes from './AvailableMeals.module.css';

const AvailableMeals = (props) => {
	return (
		<Card className={classes.meals}>
			<ul>
				{props.DUMMY_MEALS.map((meal) => {
					return (
						<MealItem
							key={meal.id}
							id={meal.id}
							name={meal.name}
							description={meal.description}
							price={`$${meal.price}`}
							onAddMeal={props.onAddMeal}
						/>
					);
				})}
			</ul>
		</Card>
	);
};

export default AvailableMeals;
