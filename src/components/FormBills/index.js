import React, { PureComponent } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import FormDelivery from '../FormDelivery';

export default class FormBills extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
            checked: true,
		};
		this.onChangeCheck = this.onChangeCheck.bind(this);
	}

	onChangeCheck(checked) {
		this.setState({ checked });
	}

	render() {
		return (
			<div>
				<FormDelivery
					title={'Adresse de livraison'}
					checked={this.state.checked}
					showCheckBox={true}
					showSubmitButton={true}
					onChangeCheck={this.onChangeCheck}
				/>
				{!this.state.checked ? (
					<FormDelivery
						title={'Adresse de facturation'}
						checked={this.state.checked}
						showCheckBox={false}
					/>
				) : (
					''
				)}
			</div>
		);
	}
}