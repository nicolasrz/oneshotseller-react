import React, { PureComponent } from 'react';
import axios from 'axios';
import { Item } from 'semantic-ui-react';
import Helper from '../../utils/Helper';
import LinkDelete from '../LinkDelete';
import constant from '../../utils/constant.json';
import './style.css';
export default class Cart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			totalPrice: 0
		};

		const elems = Helper.getCart();
		if (elems.length > 0) {
			axios.post(`${constant.api}/article/ids`, elems).then((response) => {
				this.setState({ articles: response.data });
				this.setTotalPrice(response.data);
			});
		}
	}

	handleClickDelete = (index) => {
		const { articles } = this.state;
		let newArticles = [];
		for (let i = 0; i < articles.length; i++) {
			if (articles[i].index !== index) {
				newArticles.push(articles[i]);
			}
		}
		let newElems = [];
		for (let i = 0; i < newArticles.length; i++) {
			newElems.push({ index: i, id: newArticles[i].id });
		}
		Helper.updateCart(newElems);
		this.setState({ articles: newArticles });
		this.setTotalPrice(newArticles);
		Helper.getCart();
	};

	

	render() {
		return (
			<div className="border">
				<h3>Votre panier - Total : {this.state.totalPrice} €</h3>
				<Item.Group>
					{Object.keys(this.state.articles).map((key) => {
						const article = this.state.articles[key];
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
										<LinkDelete index={article.index} handleClickDelete={this.handleClickDelete} />
									</Item.Meta>
								</Item.Content>
							</Item>
						);
					})}
				</Item.Group>
			</div>
		);
	}
}
n