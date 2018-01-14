import React, { PureComponent } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import constant from '../../utils/constant.json';
import Page from '../Page';
import Article from '../Article';
import Helper from '../../utils/Helper';

class ArticleList extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
		this.renderArticle = this.renderArticle.bind(this);
		this.handleAddtoCart = this.handleAddtoCart.bind(this);
	}

	componentWillMount() {
		axios.get(`${constant.api}/article/`).then((response) => {
			this.setState({ articles: response.data });
		});
	}

	handleAddtoCart(id) {
		Helper.addItem(id);
	}

	renderArticle() {
		const articles = this.state.articles;
		return (
			<Card.Group itemsPerRow={4}>
				{Object.keys(articles).map((key) => {
					return <Article article={articles[key]} key={key} handleAddtoCart={this.handleAddtoCart} />;
				})}
			</Card.Group>
		);
	}
	render() {
		return <Page>{this.state.articles ? this.renderArticle() : ''}</Page>;
	}
}

export default ArticleList;
