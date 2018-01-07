import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './w3.css';
import './oneshotseller.css';
import registerServiceWorker from './registerServiceWorker';
import ArticleList from './components/ArticleList';
import HomePage from './components/HomePage';
import Delivery from './components/Delivery';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/articles" component={ArticleList} />
				<Route path="/cart" component={Cart} />
				<Route path="/delivery" component={Delivery} />
				<Route path="/contact" component={HomePage} />
				<Route path="/apropos" component={HomePage} />
			</Switch>
		</Router>
	);
};

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
