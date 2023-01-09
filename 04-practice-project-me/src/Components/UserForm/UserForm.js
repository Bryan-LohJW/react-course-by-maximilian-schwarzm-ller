import React, { useState } from 'react';

import InputError from './InputError';

const UserForm = (props) => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const onAgeChange = (event) => {
		setAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();

		if (username.trim().length === 0) {
			setErrorMessage('Username cannot be blank.');
			setError(true);
			return;
		}

		if (age < 0 || age > 100) {
			setErrorMessage('Age must be between 0 and 100.');
			setError(true);
			return;
		}

		const user = {
			username: username,
			age: age,
			id: Math.random(),
		};
		props.onAdd(user);
		setUsername('');
		setAge('');
	};

	const acknowledgeHandler = () => {
		setError(false);
	};

	return (
		<div>
			{error && (
				<InputError
					message={errorMessage}
					acknowledge={acknowledgeHandler}
				/>
			)}
			<form onSubmit={addUserHandler}>
				<label>Username</label>
				<input
					type="text"
					value={username}
					onChange={onUsernameChange}
				></input>

				<label>Age</label>
				<input
					type="number"
					value={age}
					onChange={onAgeChange}
					step="1"
				></input>

				<button type="submit">Add User</button>
			</form>
		</div>
	);
};

export default UserForm;
