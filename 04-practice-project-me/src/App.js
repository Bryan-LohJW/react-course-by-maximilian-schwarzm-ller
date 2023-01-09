import React, { useState } from 'react';

import UsersList from './Components/Users/UsersList';
import UserForm from './Components/UserForm/UserForm';

function App() {
	const [users, setUsers] = useState([]);

	const newUserHandler = (user) => {
		setUsers(() => {
			const newUsers = [user, ...users];
			return newUsers;
		});
	};

	return (
		<div>
			<UserForm onAdd={newUserHandler} />
			<UsersList items={users} />
		</div>
	);
}

export default App;
