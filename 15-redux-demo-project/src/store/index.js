import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter += action.amount;
		},
		toggleCounter(state) {
			state.showCounter = !state.showcounter;
		},
	},
});

const counterReducer = (state = initialState, action) => {
	if (action.type === 'increment') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.counter = newState.counter + 1;
		return newState;
	}
	if (action.type === 'increase') {
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	}
	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	}
	if (action.type === 'toggle') {
		return {
			showCounter: !state.showCounter,
			counter: state.counter,
		};
	}
	return state;
};

const store = createStore(counterReducer);

export default store;
