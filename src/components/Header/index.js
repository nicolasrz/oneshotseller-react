import React, { PureComponent } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';
class Header extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<Menu className="custom-header">
				<Menu.Menu position="right">
					<Menu.Item
						as={Link}
						to="/"
						name="accueil"
						active={activeItem === 'accueil'}
						onClick={this.handleItemClick}
						className="uppercase-header-item"
					/>

					<Menu.Item
						name="articles"
						as={Link}
						to="/articles"
						active={activeItem === 'articles'}
						onClick={this.handleItemClick}
						className="uppercase-header-item"
					/>
					<Menu.Item
						name="panier"
						as={Link}
						to="/cart"
						active={activeItem === 'cart'}
						onClick={this.handleItemClick}
						className="uppercase-header-item"
					>
					{/* Panier<span className='nb-in-cart'>0</span> */}
					</Menu.Item>
					<Menu.Item
						name="livraison"
						as={Link}
						to="/delivery"
						active={activeItem === 'delivery'}
						onClick={this.handleItemClick}
						className="uppercase-header-item"
					/>
				</Menu.Menu>
				<Menu.Menu position="right">
					<Menu.Item>
						<Icon name='cart' />
					</Menu.Item>
					<Menu.Item
						name="contact"
						active={activeItem === 'contact'}
						onClick={this.handleItemClick}
						className="uppercase-header-item"
					/>
					<Menu.Item
						name="à propos"
						active={activeItem === 'about'}
						onClick={this.handleItemClick}
						className="uppercase-header-item"
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Header;
