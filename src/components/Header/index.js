import React, { PureComponent } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends PureComponent {
	constructor(props) {
		super(props);
		let path = window.location.pathname;
		path = path.replace('/', '');
		if (path === '') {
			path = 'home';
		}
		this.state = { activeItem: path };
	}

	render() {
		const { activeItem } = this.state;
		return (
			<Menu className="custom-header">
				<Menu.Menu position="right">
					<Menu.Item
						as={Link}
						to="/"
						name="accueil"
						active={activeItem === 'home'}
						className="uppercase-header-item"
					/>

					<Menu.Item
						name="boutique"
						as={Link}
						to="/shop"
						active={activeItem === 'shop'}
						className="uppercase-header-item"
					/>
					<Menu.Item
						name="panier"
						as={Link}
						to="/cart"
						active={activeItem === 'cart'}
						className="uppercase-header-item"
					/>
				</Menu.Menu>
				<Menu.Menu position="right">
					<Menu.Item name="contact" active={activeItem === 'contact'} className="uppercase-header-item" />
					<Menu.Item name="à propos" active={activeItem === 'about'} className="uppercase-header-item" />
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Header;
