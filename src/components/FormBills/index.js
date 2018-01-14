import React, { PureComponent } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import FormDelivery from '../FormDelivery';
import './style.css';

export default class FormBills extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			checked: true
		};
		this.onChangeCheck = this.onChangeCheck.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeCheck(checked) {
		this.setState({ checked });
	}

	onSubmit(bill) {
		console.log(bill);
	}

	render() {
		return (
			<div className="border">
				<FormDelivery
					title={'Adresse de livraison'}
					checked={this.state.checked}
					showCheckBox={true}
					showSubmitButton={true}
					onChangeCheck={this.onChangeCheck}
					onSubmit={this.onSubmit}
				/>
				{!this.state.checked ? (
					<FormDelivery
						title={'Adresse de facturation'}
						checked={this.state.checked}
						showCheckBox={false}
						onSubmit={this.onSubmit}
					/>
				) : (
					''
				)}
				<Button onClick={this.onSubmit} className="button-shadow" basic>
					Passer commande
				</Button>
			</div>
		);
	}
}
