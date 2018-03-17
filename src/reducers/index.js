import { combineReducers } from 'redux';
import ActiveItem from './reducer-active-item';
import HeaderItems from './reducer-header-items';

const allReducers = combineReducers({
	headerItems: HeaderItems,
	activeItem: ActiveItem
});

export default allReducers;
