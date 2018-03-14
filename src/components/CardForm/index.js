import React from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import axios from "axios";
import constant from "../../utils/constant.json";

class CardForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.stripe.createToken().then(({ token }) => {
      const { order } = this.props;
      const chargeRequestOrder = {
        order: order,
        chargeRequest: {
          description: "",
          amount: order.totalPrice,
          stripeEmail: token.email,
          stripeToken: token.id
        }
      };
      axios
        .post(`${constant.api}/charge/`, chargeRequestOrder)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  render() {
    return (
      <form>
        <CardElement />
        <button onClick={this.onSubmit}>Valider</button>
      </form>
    );
  }
}

export default injectStripe(CardForm);
