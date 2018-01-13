import React, { PureComponent } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import Page from '../Page';
import Cart from '../Cart';
import FormDelivery from '../FormDelivery';
export default class PageCart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			totalPrice: 0
		};
		this.setTotalPrice = this.setTotalPrice.bind(this);
	}

	setTotalPrice(totalPrice) {
		this.setState({ totalPrice });
	}
	render() {
		return (
			<Page>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<Header size="small">Votre panier - Total : {this.state.totalPrice} €</Header>
						</Grid.Column>
						<Grid.Column width={8}>
							<Header size="small">Votre adresse de livraison</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={8}>
							<Cart setTotalPrice={this.setTotalPrice} />
						</Grid.Column>
						<Grid.Column width={8}>
							<FormDelivery />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Page>
		);
	}
}
