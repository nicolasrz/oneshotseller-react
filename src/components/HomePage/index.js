import React, { PureComponent } from 'react';
import Page from '../Page';
import '../../w3.css';
export default class HomePage extends PureComponent {
	render() {
		return (
			<Page>
				<div className="w3-content">
					<div className="w3-row w3-padding-64" id="about">
						<div className="w3-col m6 w3-padding-large w3-hide-small">
							<img
								src="https://mediasv6.truffaut.com/Articles/jpg/0615000/615102_003_1000.jpg"
								className="w3-round w3-image w3-opacity-min"
								alt="Table Setting"
								width="600"
								height="750"
							/>
						</div>

						<div className="w3-col m6 w3-padding-large">
							<h1 className="w3-center">One Shot Seller</h1>
							<br />
							<h5 className="w3-center">Tradition since 1889</h5>
							<p className="w3-text-grey">
								The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
								consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
								iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur.We only use <span className="w3-tag w3-light-grey">seasonal</span> ingredients.
							</p>
							<p className="w3-text-grey">
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
					<div className="w3-row w3-padding-64" id="menu">
						<div className="w3-col l6 w3-padding-large">
							<h1 className="w3-center">Nos produits</h1>
							<br />
							<h4>Tableaux personnalisés</h4>
							<p className="w3-text-grey">Un tableau digne de votre vous</p>
							<br />

							<h4>Honey Almond Granola with Fruits</h4>
							<p className="w3-text-grey">
								Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
							</p>
							<br />

							<h4>Belgian Waffle</h4>
							<p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p>
							<br />

							<h4>Scrambled eggs</h4>
							<p className="w3-text-grey">
								Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
							</p>
							<br />

							<h4>Blueberry Pancakes</h4>
							<p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
						</div>

						<div className="w3-col l6 w3-padding-large">
							<img src="" className="w3-round w3-image w3-opacity-min" alt="Tableau" />
						</div>
					</div>
				</div>
			</Page>
		);
	}
}
