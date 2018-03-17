import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import allReducers from './reducers';
import './index.css';
import './w3.css';
import './oneshotseller.css';
import Shop from './components/Shop';
import HomePage from './components/HomePage';
import PageCart from './components/PageCart';

const store = createStore(allReducers);

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={Shop} />
				<Route path="/cart" component={PageCart} />
				<Route path="/contact" component={HomePage} />
				<Route path="/apropos" component={HomePage} />
			</Switch>
		</Router>
	);
};

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
