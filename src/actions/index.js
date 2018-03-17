export const addToCart = (article) => {
	return {
		type: 'ADD_ARTICLE_TO_CART',
		payload: article
	};
};

export const activateItem = (headerItems, itemIdToActivate) => {
	headerItems.map((item) => {
		item.active = 'false';
	});
	headerItems[itemIdToActivate].active = 'true';
	return {
		type: 'ACTIVATE_ITEM',
		payload: headerItems
	};
};
