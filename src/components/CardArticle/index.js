import React, { Component } from "react";
import { Card, Image, Button, Icon } from 'semantic-ui-react'



class CardArticle extends Component{
	render(){
		const {article} = this.props;

		return(
			<Card>
			    <Image src={article.image} />
			    <Card.Content>
			      <Card.Header>
			        {article.name}
			      </Card.Header>
			      <Card.Description>
			        Prix: {article.price} €
			      </Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			      <Button fluid> <Icon name='add to cart' size='large' />Ajouter au panier</Button>
			    </Card.Content>
			  </Card>
			);
	}
}

export default CardArticle;