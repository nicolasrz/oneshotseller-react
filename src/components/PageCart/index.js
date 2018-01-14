import React, { PureComponent } from 'react';
import { Grid, Image, Form } from 'semantic-ui-react';
import Page from '../Page';
import Cart from '../Cart';
import FormBills from '../FormBills';
export default class PageCart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			totalPrice: 0
		};
		this.onClickPayment = this.onClickPayment.bind(this);
		this.setFullCart = this.setFullCart.bind(this);
	}

	onClickPayment(order) {
		order.totalPrice = this.state.totalPrice;
		order.articles = this.state.articles;
		console.log(order);
	}

	setFullCart(articles, totalPrice) {
		this.setState({ articles, totalPrice });
	}

	render() {
		return (
			<Page>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<Cart setFullCart={this.setFullCart} />
						</Grid.Column>
						<Grid.Column width={8}>
							<Form className="border">
								<FormBills onClickPayment={this.onClickPayment} />
							</Form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Page>
		);
	}
}
