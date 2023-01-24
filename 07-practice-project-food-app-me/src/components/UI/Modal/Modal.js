import React from 'react';
import { ReactDOM } from 'react-dom';

import Card from './../Card/Card';
import classes from './Modal.module.css';

const Backdrop = (props) => {
	return (
		<div className={classes.backdrop}>
			<Card>{props.children}</Card>
		</div>
	);
};

const Modal = (props) => {
	return (
		<Backdrop>
			<div className={classes.modal}>{props.children}</div>
		</Backdrop>
	);
};

export default Modal;
