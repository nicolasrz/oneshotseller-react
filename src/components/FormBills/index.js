import React, { PureComponent } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import axios from 'axios';
import constant from '../../utils/constant.json';
import FormEmailTelephone from '../FormEmailTelephone';
import FormDelivery from '../FormDelivery';
import './style.css';

export default class FormBills extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			checked: true,
			telephone: '',
			email: ''
		};
		this.onChangeCheck = this.onChangeCheck.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeTelephone = this.onChangeTelephone.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeCheck(checked) {
		this.setState({ checked });
	}
	onChangeEmail(email) {
		this.setState({ email });
	}
	onChangeTelephone(telephone) {
		this.setState({ telephone });
	}

	onSubmit() {
		const delivery = this.refs.formDelivery.getBill();
		const { checked, email, telephone } = this.state;
		let facturation = null;
		if (!checked) {
			facturation = this.refs.formFacturation.getBill();
		}
		const order = {
			delivery,
			facturation,
			email,
			telephone
		};
		this.props.onClickPayment(order);
	}

	render() {
		return (
			<div>
				<FormEmailTelephone onChangeEmail={this.onChangeEmail} onChangeTelephone={this.onChangeTelephone} />
				<FormDelivery
					title={'Adresse de livraison'}
					checked={this.state.checked}
					showCheckBox={true}
					showSubmitButton={true}
					onChangeCheck={this.onChangeCheck}
					ref="formDelivery"
				/>
				{!this.state.checked ? (
					<FormDelivery
						title={'Adresse de facturation'}
						checked={this.state.checked}
						showCheckBox={false}
						ref="formFacturation"
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
