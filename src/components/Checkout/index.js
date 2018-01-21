import React, { PureComponent } from 'react';
import { Elements } from 'react-stripe-elements';
import CardForm from '../CardForm';
export default class Checkout extends PureComponent {
	render() {
		return (
			<div className="Checkout">
				<h1>Available Elements</h1>
				<Elements>
					<CardForm />
				</Elements>
			</div>
		);
	}
}
