import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';
export default class FormEmailTelephone extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			telephone: ''
		};
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeTelephone = this.onChangeTelephone.bind(this);
	}

	onChangeEmail(e, data) {
		this.setState({ email: data.value });
		this.props.onChangeEmail(data.value);
	}
	onChangeTelephone(e, data) {
		this.setState({ telephone: data.value });
		this.props.onChangeTelephone(data.value);
	}

	render() {
		return (
			<div className="border">
				<Form.Input
					type="email"
					label="E-mail"
					placeholder="Email"
					value={this.state.email}
					onChange={this.onChangeEmail}
					required
				/>
				<Form.Input
					type="text"
					label="Téléphone"
					placeholder="Téléphone"
					value={this.state.telephone}
					onChange={this.onChangeTelephone}
					required
				/>
			</div>
		);
	}
}
