import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import { addToCart } from '../actions/index';
import { api } from '../utils/constant.json';
import '../oneshotseller.css';

class Article extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		};
	}

	handleAddtoCart = (e, data) => {
		this.setState({ checked: true });
		this.props.addToCart(this.props.order, this.props.article);
	};

	render() {
		const { article } = this.props;
		return (
			<Card link className="border">
				<Image src={article.image} />
				<Card.Content>
					<Card.Header className="text-center w3-text-grey">{article.name}</Card.Header>
					<Card.Description className="text-center w3-text-grey" />
					<Card.Content extra>
						<Button animated="vertical" basic color="grey" fluid onClick={this.handleAddtoCart}>
							<Button.Content hidden>
								Ajouter au panier
								{this.state.checked ? <Icon name="checkmark" /> : ''}
							</Button.Content>
							<Button.Content visible>{article.price} €</Button.Content>
						</Button>
					</Card.Content>
				</Card.Content>
			</Card>
		);
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ addToCart: addToCart }, dispatch);
};

const mapStateToProps = (state) => {
	return {
		order: state.order
	};
};

export default connect(mapStateToProps, matchDispatchToProps)(Article);
