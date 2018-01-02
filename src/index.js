import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ArticleList from './components/ArticleList';
import Payments from './components/Payment';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <Router>
    	<Switch>
				<Route exact path="/" component={ArticleList} />
				<Route path="/payment" component={Payments} />
				<Route path="/cart" component={Cart} />
      	</Switch>
    </Router>
  );
};

ReactDOM.render(<Root/>, document.getElementById("root"));

registerServiceWorker();
