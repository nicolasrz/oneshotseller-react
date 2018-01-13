import React, { PureComponent } from 'react';
import axios from 'axios';
import { Image, Item, Icon } from 'semantic-ui-react';
import Helper from '../../utils/Helper';
import LinkDelete from '../LinkDelete';
import constant from '../../utils/constant.json';
import './style.css';
export default class Cart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
		this.handleClickDelete = this.handleClickDelete.bind(this);
	}
	componentWillMount() {
		const elems = Helper.getCart();
		const self = this;
		if (elems.length > 0) {
			axios.post(`${constant.api}/article/ids`, elems).then((response) => {
				self.setState({ articles: response.data });
			});
		}
	}

	handleClickDelete(index) {
		const { articles } = this.state;
		let newArticles = [];
		for (let i = 0; i < articles.length; i++) {
			if (articles[i].index !== index) {
				newArticles.push(articles[i]);
			}
		}
		Helper.updateCart(newArticles);
		this.setState({ articles: newArticles });
	}

	render() {
		console.log('render');
		return (
				<Item.Group className='border'>
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
		);
	}
}
