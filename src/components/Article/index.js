import React, { PureComponent } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "../../oneshotseller.css";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import "./style.css";
class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleAddtoCart = (e, data) => {
    this.setState({ checked: true });
    this.props.handleAddtoCart(data.id);
  };
  render() {
    const { article } = this.props;
    return (
      <Card link className="border">
        <Image src={article.image} />
        <Card.Content>
          <Card.Header className="text-center w3-text-grey">
            {article.name}
          </Card.Header>
          <Card.Description className="text-center w3-text-grey" />
          <Card.Content extra>
            <Button
              animated="vertical"
              basic
              color="grey"
              fluid
              onClick={this.handleAddtoCart}
              id={article.id}
            >
              <Button.Content hidden>
                Ajouter au panier
                {this.state.checked ? <Icon name="checkmark" /> : ""}
              </Button.Content>
              <Button.Content visible>{article.price} €</Button.Content>
            </Button>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default Article;
