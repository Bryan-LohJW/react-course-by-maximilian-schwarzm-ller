import React from 'react';

import User from './User';

const UsersList = (props) => {
	return (
		<div>
			{props.items.map((user) => {
				return (
					<User
						key={user.id}
						username={user.username}
						age={user.age}
					/>
				);
			})}
		</div>
	);
};

export default UsersList;
