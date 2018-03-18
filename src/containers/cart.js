import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item } from 'semantic-ui-react';
import { deleteArticleFromCart } from '../actions/index';
import LinkDelete from '../components/LinkDelete';

class Cart extends PureComponent {
	handleClickDelete = (index) => {
		this.props.deleteArticleFromCart(this.props.order, index);
	};
	render() {
		const { order } = this.props;
		const { articles, totalPrice } = order;
		if (articles.length > 0) {
			return (
				<div className="border">
					<h3>Votre panier - Total : {totalPrice}€</h3>
					<Item.Group>
						{Object.keys(articles).map((key) => {
							const article = articles[key];
							return (
								<Item key={key}>
									<Item.Image size="small" src={article.image} />
									<Item.Content>
										<Item.Header as="a">{article.name}</Item.Header>
										<Item.Meta>
											<span className="price">{article.price} €</span>
										</Item.Meta>
										<Item.Description>
											<p>{article.description}</p>
										</Item.Description>
										<Item.Meta>
											<LinkDelete
												index={article.index}
												handleClickDelete={this.handleClickDelete}
											/>
										</Item.Meta>
									</Item.Content>
								</Item>
							);
						})}
					</Item.Group>
				</div>
			);
		}
		return <h3> Votre panier est vide </h3>;
	}
}

const mapStateToProps = (state) => {
	return {
		order: state.order
	};
};

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ deleteArticleFromCart: deleteArticleFromCart }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Cart);
