import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
class CardForm extends React.Component {
	render() {
		return (
			<form onSubmit={() => this.props.stripe.createToken().then((payload) => console.log(payload))}>
				<CardElement />
				<button>Pay</button>
			</form>
		);
	}
}

export default injectStripe(CardForm);
