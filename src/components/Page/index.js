import React, { PureComponent } from 'react';
import Header from '../Header';
import { Container } from 'semantic-ui-react';
import './style.css';
class Page extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			container: ''
		};
	}

	render() {
		return (
			<div>
				<Header />
				<Container>{this.props.children}</Container>
			</div>
		);
	}
}

export default Page;
