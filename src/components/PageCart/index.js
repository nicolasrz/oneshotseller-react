import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Form, Button, Accordion, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { StripeProvider } from 'react-stripe-elements';
import { addInformationOrder, addFacturationSameAsDelivery } from '../../actions/index';

import Page from '../Page';
import FormField from '../FormField';
import Checkout from '../Checkout';
import Cart from '../../containers/cart';
import Helper from '../../utils/Helper';
import constant from '../../utils/constant.json';
import './style.css';

class PageCart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			checked: true,
			activeIndex: 0,
			isSuccess: false
		};
	}

	handleClickAccordion = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	onChangeInput = (value, parentStateName, stateName) => {
		this.props.addInformationOrder(this.props.order, value, parentStateName, stateName);
	};

	onChangeCheck = (e, { checked }) => {
		this.checkFacturation();
	};

	checkFacturation = () => {
		const { checked } = this.state;
		if (checked) {
			this.props.addFacturationSameAsDelivery(this.props.order);
		}
	};

	onClickSend = () => {
		const { order } = this.props;
		this.checkFacturation();
		if (Helper.checkEmail(order.email)) {
			axios
				.post(`${constant.api}/order/check`, order)
				.then(({ data }) => {
					this.setState({
						isSuccess: data.isSuccess
					});
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			console.log('bad email');
		}
	};

	render() {
		const { activeIndex } = this.state;
		return (
			<Page isFluid={true}>
				<Grid className="margin-horizontal-5">
					<Grid.Row>
						<Grid.Column width={8}>
							<Cart />
						</Grid.Column>
						<Grid.Column width={8}>
							<Accordion styled fluid>
								<Accordion.Title
									active={activeIndex === 0}
									index={0}
									onClick={this.handleClickAccordion}
								>
									<Icon name="dropdown" />
									Commande
									{this.state.isSuccess ? <Icon name="checkmark" color="green" /> : ''}
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 0}>
									<Form>
										<div className="border">
											<h3>Adresse de livraison</h3>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												label="E-mail"
												type="email"
												stateName="email"
												required="true"
											/>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												label="Téléphone"
												type="text"
												stateName="phoneNumber"
												required="true"
											/>
										</div>
										<div className="border">
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												parentStateName="delivery"
												label="Prénom"
												type="text"
												stateName="firstname"
												required="true"
											/>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												parentStateName="delivery"
												label="Nom"
												type="text"
												stateName="lastname"
												required="true"
											/>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												parentStateName="delivery"
												label="Numéro de voie"
												type="text"
												stateName="number"
												required="true"
											/>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												parentStateName="delivery"
												label="Libellé de voie"
												type="text"
												stateName="street"
												required="true"
											/>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												parentStateName="delivery"
												label="Complément d'adresse"
												type="text"
												stateName="complement"
												required="false"
											/>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												parentStateName="delivery"
												label="Code postal"
												type="text"
												stateName="zipcode"
												required="true"
											/>
											<FormField
												onChange={this.onChangeInput}
												order={this.props.order}
												parentStateName="delivery"
												label="Ville"
												type="text"
												stateName="city"
												required="true"
											/>
											<Form.Checkbox
												label="Utiliser la même adresse pour la facturation"
												defaultChecked={this.state.checked}
												onChange={this.onChangeCheck}
											/>
										</div>

										{!this.state.checked ? (
											<div className="border">
												<h3>Adresse de facturation</h3>
												<FormField
													onChange={this.onChangeInput}
													order={this.props.order}
													parentStateName="facturation"
													label="Prénom"
													type="text"
													stateName="firstname"
													required="true"
												/>
												<FormField
													onChange={this.onChangeInput}
													order={this.props.order}
													parentStateName="facturation"
													label="Nom"
													type="text"
													stateName="lastname"
													required="true"
												/>
												<FormField
													onChange={this.onChangeInput}
													order={this.props.order}
													parentStateName="facturation"
													label="Numéro de voie"
													type="text"
													stateName="number"
													required="true"
												/>
												<FormField
													onChange={this.onChangeInput}
													order={this.props.order}
													parentStateName="facturation"
													label="Libellé de voie"
													type="text"
													stateName="street"
													required="true"
												/>
												<FormField
													onChange={this.onChangeInput}
													order={this.props.order}
													parentStateName="facturation"
													label="Complément d'adresse"
													type="text"
													stateName="complement"
													required="false"
												/>
												<FormField
													onChange={this.onChangeInput}
													order={this.props.order}
													parentStateName="facturation"
													label="Code postal"
													type="text"
													stateName="zipcode"
													required="true"
												/>
												<FormField
													onChange={this.onChangeInput}
													order={this.props.order}
													parentStateName="facturation"
													label="Ville"
													type="text"
													stateName="city"
													required="true"
												/>
											</div>
										) : (
											''
										)}
										<Button basic onClick={this.onClickSend} className="go-to-payment border">
											Envoyer à cette adresse
										</Button>
									</Form>
								</Accordion.Content>

								<Accordion.Title
									className={this.state.isSuccess ? 'disabled-title' : ''}
									active={activeIndex === 1}
									index={1}
									onClick={this.handleClickAccordion}
								>
									<Icon name="dropdown" />
									Validation de votre commande
								</Accordion.Title>
								<Accordion.Content active={this.state.isSuccess ? true : false}>
									<StripeProvider apiKey={constant.publicKey}>
										<Checkout order={this.props.order} />
									</StripeProvider>
								</Accordion.Content>
							</Accordion>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Page>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		order: state.order
	};
};

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{ addInformationOrder: addInformationOrder, addFacturationSameAsDelivery: addFacturationSameAsDelivery },
		dispatch
	);
};

export default connect(mapStateToProps, matchDispatchToProps)(PageCart);
