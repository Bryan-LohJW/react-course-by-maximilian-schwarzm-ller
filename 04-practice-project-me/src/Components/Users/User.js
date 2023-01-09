import React from 'react';

const User = (props) => {
	return (
		<div>
			<p>
				{props.username} ({props.age} years old)
			</p>
		</div>
	);
};

export default User;
