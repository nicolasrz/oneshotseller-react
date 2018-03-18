import { combineReducers } from 'redux';
import ActiveItem from './reducer-active-item';
import HeaderItems from './reducer-header-items';
import Order from './reducer-order';

const allReducers = combineReducers({
	headerItems: HeaderItems,
	activeItem: ActiveItem,
	order: Order
});

export default allReducers;
