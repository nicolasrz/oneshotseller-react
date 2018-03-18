import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import { connect } from 'react-redux';

import { Button } from 'semantic-ui-react';
import axios from 'axios';
import constant from '../../utils/constant.json';

class CardForm extends React.Component {
	constructor(props) {
		super(props);
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.stripe.createToken().then(({ token }) => {
			const { order } = this.props;
			const chargeRequestOrder = {
				order: order,
				chargeRequest: {
					description: '',
					amount: order.totalPrice,
					stripeEmail: token.email,
					stripeToken: token.id
				}
			};
			axios
				.post(`${constant.api}/charge/`, chargeRequestOrder)
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	render() {
		return (
			<form>
				<CardElement />
				<Button onClick={this.onSubmit} color="green" fluid className="margin-top-5">
					Payer
				</Button>
			</form>
		);
	}
}

export default injectStripe(CardForm);
