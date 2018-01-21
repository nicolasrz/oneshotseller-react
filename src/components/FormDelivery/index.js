import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';
import './style.css';
export default class FormDelivery extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			number: '',
			street: '',
			complement: '',
			city: '',
			zipcode: ''
		};
		this.onChangeFirstname = this.onChangeFirstname.bind(this);
		this.onChangeLastname = this.onChangeLastname.bind(this);
		this.onChangeNumber = this.onChangeNumber.bind(this);
		this.onChangeStreet = this.onChangeStreet.bind(this);
		this.onChangeComplement = this.onChangeComplement.bind(this);
		this.onChangeCity = this.onChangeCity.bind(this);
		this.onChangeZipcode = this.onChangeZipcode.bind(this);
		this.onChangeCheck = this.onChangeCheck.bind(this);
		this.getFormData = this.getFormData.bind(this);
	}

	onChangeFirstname = (event, data) => {
		this.props.setDeliveryIsOk(false);
		this.setState({ firstname: data.value });
	};
	onChangeLastname = (event, data) => {
		this.props.setDeliveryIsOk(false);
		this.setState({ lastname: data.value });
	};
	onChangeNumber = (event, data) => {
		this.props.setDeliveryIsOk(false);
		this.setState({ number: data.value });
	};
	onChangeStreet = (event, data) => {
		this.props.setDeliveryIsOk(false);
		this.setState({ street: data.value });
	};
	onChangeComplement = (event, data) => {
		this.props.setDeliveryIsOk(false);
		this.setState({ complement: data.value });
	};
	onChangeCity = (event, data) => {
		this.props.setDeliveryIsOk(false);
		this.setState({ city: data.value });
	};
	onChangeZipcode = (event, data) => {
		this.props.setDeliveryIsOk(false);
		this.setState({ zipcode: data.value });
	};
	onChangeCheck(event, data) {
		this.props.onChangeCheck(data.checked);
	}

	getFormData() {
		return this.state;
	}

	render() {
		return (
			<div className="border">
				<h3>{this.props.title}</h3>
				<Form.Group unstackable widths={2}>
					<Form.Input
						label="Prénom"
						placeholder="Prénom"
						value={this.state.firstname}
						onChange={this.onChangeFirstname}
						required
					/>
					<Form.Input
						label="Nom"
						placeholder="Nom"
						value={this.state.lastname}
						onChange={this.onChangeLastname}
						required
					/>
				</Form.Group>
				<Form.Group widths={2}>
					<Form.Input
						label="Numéro de voie"
						placeholder="Numéro de voie"
						value={this.state.number}
						onChange={this.onChangeNumber}
						required
					/>
				</Form.Group>
				<Form.Input
					label="Libellé de voie"
					placeholder="Libellé de voie"
					value={this.state.street}
					onChange={this.onChangeStreet}
					required
				/>
				<Form.Input
					label="Complément d'adresse"
					placeholder="Complément d'adresse"
					value={this.state.complement}
					onChange={this.onChangeComplement}
				/>
				<Form.Group widths={2}>
					<Form.Input
						label="Code postal"
						placeholder="Code postal"
						value={this.state.zipcode}
						onChange={this.onChangeZipcode}
						required
					/>
					<Form.Input
						label="Ville"
						placeholder="Ville"
						value={this.state.city}
						onChange={this.onChangeCity}
						required
					/>
				</Form.Group>
				{this.props.showCheckBox ? (
					<Form.Checkbox
						label="Utiliser la même adresse pour la facturation"
						defaultChecked={this.props.checked}
						onChange={this.onChangeCheck}
					/>
				) : (
					''
				)}
			</div>
		);
	}
}
