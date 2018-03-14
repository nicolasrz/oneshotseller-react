import React, { PureComponent } from "react";
import { Form } from "semantic-ui-react";
import "./style.css";
export default class FormDelivery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      number: "",
      street: "",
      complement: "",
      city: "",
      zipcode: ""
    };
  }

  onChangeFirstname = (event, { value }) => {
    this.props.setDeliveryIsOk(false);
    this.setState({ firstname: value });
  };
  onChangeLastname = (event, { value }) => {
    this.props.setDeliveryIsOk(false);
    this.setState({ lastname: value });
  };
  onChangeNumber = (event, { value }) => {
    this.props.setDeliveryIsOk(false);
    this.setState({ number: value });
  };
  onChangeStreet = (event, { value }) => {
    this.props.setDeliveryIsOk(false);
    this.setState({ street: value });
  };
  onChangeComplement = (event, { value }) => {
    this.props.setDeliveryIsOk(false);
    this.setState({ complement: value });
  };
  onChangeCity = (event, { value }) => {
    this.props.setDeliveryIsOk(false);
    this.setState({ city: value });
  };
  onChangeZipcode = (event, { value }) => {
    this.props.setDeliveryIsOk(false);
    this.setState({ zipcode: value });
  };
  onChangeCheck = (event, { checked }) => {
    this.props.onChangeCheck(checked);
  };

  getFormData = () => {
    return this.state;
  };

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
          ""
        )}
      </div>
    );
  }
}
