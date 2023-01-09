import React from 'react';

const InputError = (props) => {
	return (
		<div>
			<p>{props.message}</p>
			<button onClick={props.acknowledge}>Ok</button>
		</div>
	);
};

export default InputError;
