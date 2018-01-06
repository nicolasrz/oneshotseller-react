import React, { PureComponent } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import '../../oneshotseller.css';

class Article extends PureComponent {
	render() {
		const { article } = this.props;
		return (
			<Card link>
				<Image src={article.image} />
				<Card.Content>
					<Card.Header className="text-center w3-text-grey">{article.name}</Card.Header>
					<Card.Description className="text-center w3-text-grey" />
					<Card.Content extra>
						<Button animated="vertical" basic color="grey" fluid>
							<Button.Content hidden>Acheter</Button.Content>
							<Button.Content visible>{article.price} €</Button.Content>
						</Button>
					</Card.Content>
				</Card.Content>
			</Card>
		);
	}
}

export default Article;
