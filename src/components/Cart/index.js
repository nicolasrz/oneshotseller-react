import React, { PureComponent } from 'react';
import axios from 'axios';
import { Image, Item, Icon } from 'semantic-ui-react';
import Page from '../Page';
import Helper from '../../utils/Helper';
import LinkDelete from '../LinkDelete';
import constant from '../../utils/constant.json';

export default class Cart extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
		this.handleClickDelete = this.handleClickDelete.bind(this);
	}
	componentWillMount() {
		const articles = Helper.getCart();
		const self = this;
		axios.post(`${constant.api}/article/ids`, articles).then((response) => {
			self.setState({ articles: response.data });
		});
	}

	handleClickDelete(id) {
		const { articles } = this.state;
		console.log(id);
	}

	render() {
		return (
			<Page>
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
										<LinkDelete id={article.id} handleClickDelete={this.handleClickDelete} />
									</Item.Meta>
								</Item.Content>
							</Item>
						);
					})}
				</Item.Group>
			</Page>
		);
	}
}
