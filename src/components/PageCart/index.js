import React, { PureComponent } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';
import constant from '../../utils/constant.json';
import axios from 'axios';
import Page from '../Page';
import Cart from '../Cart';
import FormEmailTelephone from '../FormEmailTelephone';
import FormDelivery from '../FormDelivery';
import Helper from '../../utils/Helper';
import './style.css';

export default class PageCart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			totalPrice: 0,
			order: {},
			checked: true,
			telephone: '',
			email: ''
		};
		this.onChangeCheck = this.onChangeCheck.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeTelephone = this.onChangeTelephone.bind(this);
		this.onClickPayment = this.onClickPayment.bind(this);
		this.setFullCart = this.setFullCart.bind(this);
		this.onClickPayment = this.onClickPayment.bind(this);
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

	onClickPayment() {
		const { email, telephone, order, checked } = this.state;
		const delivery = this.refs.formDelivery.getFormData();
		let facturation = null;
		if (!checked) {
			facturation = this.refs.formFacturation.getFormData();
		} else {
			facturation = delivery;
		}

		order.telephone = telephone;
		order.email = email;
		order.totalPrice = this.state.totalPrice;
		order.articles = this.state.articles;
		order.delivery = delivery;
		order.facturation = facturation;

		if (Helper.formIsCorrect(order, checked) && Helper.checkEmail(order.email)) {
			axios
				.post(`${constant.api}/order/check`, order)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	setFullCart(articles, totalPrice) {
		this.setState({ articles, totalPrice });
	}

	render() {
		return (
			<Page isFluid={false}>
				<Grid>
					<Grid.Row>
						<Grid.Column width={8}>
							<Cart setFullCart={this.setFullCart} />
						</Grid.Column>
						<Grid.Column width={8}>
							<Form className="border">
								<FormEmailTelephone
									onChangeEmail={this.onChangeEmail}
									onChangeTelephone={this.onChangeTelephone}
								/>
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
								<Button basic onClick={this.onClickPayment} className="go-to-payment">
									Accéder au paiement
								</Button>
							</Form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Page>
		);
	}
}
