import React, { PureComponent } from "react";
import { Form } from "semantic-ui-react";
export default class FormEmailTelephone extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      telephone: "",
      email: ""
    };
  }

  onChangeEmail = (e, { value }) => {
    this.setState({ email: value });
    this.props.onChangeEmail(value);
  };
  onChangeTelephone = (e, { value }) => {
    this.setState({ telephone: value });
    this.props.onChangeTelephone(value);
  };

  render() {
    return (
      <div className="border">
        <h3>Contact</h3>
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
