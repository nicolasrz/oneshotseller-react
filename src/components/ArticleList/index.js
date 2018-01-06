import React, { PureComponent } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import constant from '../../utils/constant.json';
import Page from '../Page';
import Article from '../Article';

class ArticleList extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
		this.renderArticle = this.renderArticle.bind(this);
	}

	componentWillMount() {
		axios.get(`${constant.api}/article/`).then((response) => {
			this.setState({ articles: response.data });
		});
	}

	renderArticle() {
		const articles = this.state.articles;
		return (
			<Card.Group itemsPerRow={4}>
				{Object.keys(articles).map((key) => {
					return <Article article={articles[key]} key={key} />;
				})}
			</Card.Group>
		);
	}
	render() {
		return <Page>{this.state.articles ? this.renderArticle() : ''}</Page>;
	}
}

export default ArticleList;
