import { useEffect, useState, useMemo } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from './../../hooks/use-http';

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

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);

	const requestConfig = {
		url: 'https://react-http-9c2ae-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
	};
	const { isLoading, error, sendRequest } = useHttp();

	useEffect(() => {
		sendRequest(requestConfig, (data) => {
			setMeals(data);
		});
	}, [sendRequest]);

	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<section className={classes.meals}>
			{isLoading && <div>Loading meals</div>}
			{error && <div>Error loading meals, {error}</div>}
			{!isLoading && !error && (
				<Card>
					<ul>{mealsList}</ul>
				</Card>
			)}
		</section>
	);
};

export default AvailableMeals;
