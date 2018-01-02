import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Header extends Component{
	render(){
		return(
			<header className="w3-panel w3-center w3-opacity">
				<h1 className="w3-xlarge">Seller One Shot</h1>
				<div className="w3-padding-32">
					<div className="w3-bar w3-border">
						<Link to="/" className="w3-bar-item w3-button">Accueil</Link>
						<Link to="/cart" className="w3-bar-item w3-button">Panier</Link>
						<Link to="/payment" className="w3-bar-item w3-button">Paiement</Link>
						<Link to="/contact" className="w3-bar-item w3-button">Contact</Link>
					</div>
				</div>
			</header>
			)
	}
}


export default Header;