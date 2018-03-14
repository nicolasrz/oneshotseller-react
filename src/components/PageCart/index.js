import React, { PureComponent } from "react";
import { Grid, Form, Button, Accordion, Icon } from "semantic-ui-react";
import { StripeProvider } from "react-stripe-elements";
import Checkout from "../Checkout";
import constant from "../../utils/constant.json";
import axios from "axios";
import Page from "../Page";
import Cart from "../Cart";
import FormEmailTelephone from "../FormEmailTelephone";
import FormDelivery from "../FormDelivery";
import Helper from "../../utils/Helper";
import "./style.css";

export default class PageCart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalPrice: 0,
      order: {},
      checked: true,
      telephone: "",
      email: "",
      activeIndex: 0,
      isDeliveryOk: false
    };
  }

  handleClickAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  onChangeCheck = checked => {
    this.setState({ checked });
  };
  onChangeEmail = email => {
    this.setState({ email, isDeliveryOk: false });
  };
  onChangeTelephone = telephone => {
    this.setState({ telephone, isDeliveryOk: false });
  };

  setDeliveryIsOk = isDeliveryOk => {
    this.setState({ isDeliveryOk });
  };

  onClickSend = () => {
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

    if (
      Helper.formIsCorrect(order, checked) &&
      Helper.checkEmail(order.email)
    ) {
      axios
        .post(`${constant.api}/order/check`, order)
        .then(response => {
          this.setState({
            activeIndex: 1,
            isDeliveryOk: true,
            order
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.setState({ isDeliveryOk: false });
    }
  };

  setFullCart = (articles, totalPrice) => {
    this.setState({ articles, totalPrice });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Page isFluid={true}>
        <Grid className="margin-horizontal-5">
          <Grid.Row>
            <Grid.Column width={8}>
              <Cart setFullCart={this.setFullCart} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Accordion styled fluid>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClickAccordion}
                >
                  <Icon name="dropdown" />
                  Adresse de livraison
                  {this.state.isDeliveryOk ? (
                    <Icon name="checkmark" color="green" />
                  ) : (
                    ""
                  )}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <Form>
                    <FormEmailTelephone
                      onChangeEmail={this.onChangeEmail}
                      onChangeTelephone={this.onChangeTelephone}
                    />
                    <FormDelivery
                      title={"Adresse de livraison"}
                      checked={this.state.checked}
                      showCheckBox={true}
                      showSubmitButton={true}
                      onChangeCheck={this.onChangeCheck}
                      setDeliveryIsOk={this.setDeliveryIsOk}
                      ref="formDelivery"
                    />
                    {!this.state.checked ? (
                      <FormDelivery
                        title={"Adresse de facturation"}
                        checked={this.state.checked}
                        showCheckBox={false}
                        setDeliveryIsOk={this.setDeliveryIsOk}
                        ref="formFacturation"
                      />
                    ) : (
                      ""
                    )}
                    <Button
                      basic
                      onClick={this.onClickSend}
                      className="go-to-payment border"
                    >
                      Envoyer à cette adresse
                    </Button>
                  </Form>
                </Accordion.Content>

                <Accordion.Title
                  className={!this.state.isDeliveryOk ? "disabled-title" : ""}
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClickAccordion}
                >
                  <Icon name="dropdown" />
                  Validation de votre commande
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <StripeProvider apiKey={constant.publicKey}>
                    <Checkout order={this.state.order} />
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
