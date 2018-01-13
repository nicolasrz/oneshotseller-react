import React, { PureComponent } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './style.css';
export default class FormDelivery extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			d_firstname: '',
			d_lastname: '',
			d_number: '',
			d_street: '',
			d_complement: '',
			d_city: '',
			d_zipcode: '',
			checked: true
		};
		this.onChangeFirstname = this.onChangeFirstname.bind(this);
		this.onChangeLastname = this.onChangeLastname.bind(this);
		this.onChangeNumber = this.onChangeNumber.bind(this);
		this.onChangeStreet = this.onChangeStreet.bind(this);
		this.onChangeComplement = this.onChangeComplement.bind(this);
		this.onChangeCity = this.onChangeCity.bind(this);
		this.onChangeZipcode = this.onChangeZipcode.bind(this);
		this.onChangeUseSameAdress = this.onChangeUseSameAdress.bind(this);
	}

	onChangeFirstname = (event, data) => {
		this.setState({ d_firstname: data.value });
	};
	onChangeLastname = (event, data) => {
		this.setState({ d_lastname: data.value });
	};
	onChangeNumber = (event, data) => {
		this.setState({ d_number: data.value });
	};
	onChangeStreet = (event, data) => {
		this.setState({ d_street: data.value });
	};
	onChangeComplement = (event, data) => {
		this.setState({ d_complement: data.value });
	};
	onChangeCity = (event, data) => {
		this.setState({ d_city: data.value });
	};
	onChangeZipcode = (event, data) => {
		this.setState({ d_zipcode: data.value });
	};
	onChangeUseSameAdress(event, data) {
		this.setState({ checked: data.checked });
	}

	render() {
		return (
			<Form className="border">
				<Form.Group unstackable widths={2}>
					<Form.Input
						label="Prénom"
						placeholder="Prénom"
						value={this.state.d_firstname}
						onChange={this.onChangeFirstname}
						required
					/>
					<Form.Input
						label="Nom"
						placeholder="Nom"
						value={this.state.d_lastname}
						onChange={this.onChangeLastname}
						required
					/>
				</Form.Group>
				<Form.Group widths={2}>
					<Form.Input
						label="Numéro de voie"
						placeholder="Numéro de voie"
						value={this.state.d_number}
						onChange={this.onChangeNumber}
						required
					/>
				</Form.Group>
				<Form.Input
					label="Libellé de voie"
					placeholder="Libellé de voie"
					value={this.state.d_street}
					onChange={this.onChangeStreet}
					required
				/>
				<Form.Input
					label="Complément d'adresse"
					placeholder="Complément d'adresse"
					value={this.state.d_complement}
					onChange={this.onChangeComplement}
				/>
				<Form.Group widths={2}>
					<Form.Input
						label="Code postal"
						placeholder="Code postal"
						value={this.state.d_zipcode}
						onChange={this.onChangeZipcode}
						required
					/>
					<Form.Input
						label="Ville"
						placeholder="Ville"
						value={this.state.d_city}
						onChange={this.onChangeCity}
						required
					/>
				</Form.Group>
				<Form.Checkbox
					label="Utiliser la même adresse pour la facturation"
					defaultChecked={this.state.checked}
					onChange={this.onChangeUseSameAdress}
				/>
				{this.state.checked ? <Button type="submit">Passer commande</Button> : ''}
			</Form>
		);
	}
}
