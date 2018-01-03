import React, { PureComponent } from "react";
import { Link } from 'react-router-dom'
import { Menu, Input } from 'semantic-ui-react'
import './style.css';
class Header extends PureComponent{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render(){

		const { activeItem } = this.state
		return(
			
			<Menu className='custom-header'>
				<Menu.Menu position='right'>
					<Menu.Item
					name='accueil'
					active={activeItem === 'accueil'}
					onClick={this.handleItemClick}
					className="uppercase-header-item"
					>
					Accueil
					</Menu.Item>

					<Menu.Item
					name='articles'
					active={activeItem === 'articles'}
					onClick={this.handleItemClick}
					className="uppercase-header-item"
					>
					Articles
					</Menu.Item>
					<Menu.Item
					name='upcomingEvents'
					active={activeItem === 'upcomingEvents'}
					onClick={this.handleItemClick}
					className="uppercase-header-item"
					>
					Upcoming Events
					</Menu.Item>
				</Menu.Menu>
				<Menu.Menu position='right'>
					<Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}
						className="uppercase-header-item" 
					/>
				</Menu.Menu>
			</Menu>
		)
		
	}
}


export default Header;