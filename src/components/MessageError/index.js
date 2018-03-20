import React, { PureComponent } from "react";
import { Message } from "semantic-ui-react";

export default class MessageError extends PureComponent {
  render() {
    return (
      <Message error>
        <Message.Header>{this.props.header}</Message.Header>
        <p>{this.props.content}</p>
      </Message>
    );
  }
}
