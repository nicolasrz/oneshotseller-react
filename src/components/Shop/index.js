import React, { PureComponent } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import constant from '../../utils/constant.json';
import Page from '../Page';
import Article from '../../containers/article';

class Shop extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
		axios.get(`${constant.api}/article/`).then((response) => {
			this.setState({ articles: response.data });
		});
	}

	renderArticle = () => {
		const { articles } = this.state;
		return (
			<Card.Group itemsPerRow={4} stackable>
				{Object.keys(articles).map((key) => {
					return <Article article={articles[key]} key={key} />;
				})}
			</Card.Group>
		);
	};
	render() {
		return <Page>{this.state.articles ? this.renderArticle() : ''}</Page>;
	}
}

export default Shop;
