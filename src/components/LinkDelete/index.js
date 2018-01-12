import React, { PureComponent } from 'react';
import './style.css';
export default class Cart extends PureComponent {
	handleClickDelete = () => {
		this.props.handleClickDelete(this.props.id);
	};

	render() {
		return (
			<span className="delete" onClick={this.handleClickDelete}>
				Supprimer
			</span>
		);
	}
}
