export default (state = null, action) => {
	switch (action.type) {
		case 'ACTIVATE_ITEM':
			return action.payload;
			break;
		default:
			return state;
	}
};
