import { combineReducers } from 'redux';
import Order from './reducer-order';

const allReducers = combineReducers({
	order: Order
});

export default allReducers;
