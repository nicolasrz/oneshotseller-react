import Helper from '../utils/Helper';

export const addToCart = (order, article) => {
	let newArticle = Object.assign({}, article);
	newArticle.index = Math.random();
	order['articles'] = [ ...order['articles'], newArticle ];
	const totalPrice = Helper.getTotalPrice(order['articles']);
	order['totalPrice'] = totalPrice;
	return {
		type: 'ADD_TO_CART',
		payload: order
	};
};

export const deleteArticleFromCart = (order, index) => {
	let newOrder = Object.assign({}, order);
	for (let i = 0; i < newOrder.articles.length; i++) {
		if (newOrder.articles[i].index === index) {
			newOrder.articles.splice(i, 1);
		}
	}

	return {
		type: 'DELETE_ARTICLE_FROM_CART',
		payload: newOrder
	};
};

export const addInformationOrder = (order, value, parentStateName, stateName) => {
	let newOrder = Object.assign({}, order);
	if (parentStateName) {
		newOrder[parentStateName][stateName] = value;
	} else {
		newOrder[stateName] = value;
	}

	return {
		type: 'ADD_INFORMATION_ORDER',
		payload: newOrder
	};
};

export const addFacturationSameAsDelivery = (order) => {
	let newOrder = Object.assign({}, order);
	const { delivery } = newOrder;
	newOrder['facturation'] = delivery;
	return {
		type: 'ADD_FACTURATION_SAME_AS_DELIVERY',
		payload: newOrder
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
