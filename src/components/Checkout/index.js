import React, { PureComponent } from "react";
import { Elements } from "react-stripe-elements";
import CardForm from "../CardForm";
export default class Checkout extends PureComponent {
  render() {
    return (
      <div className="Checkout">
        <h2 className="margin-bottom-5">Paiement sécurisé</h2>
        <Elements>
          <CardForm order={this.props.order} />
        </Elements>
      </div>
    );
  }
}
