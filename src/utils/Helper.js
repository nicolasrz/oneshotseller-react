export default class Helper {
	static addItem(id) {
		let cart = localStorage.getItem('cart');
		if (cart === null) {
			cart = [];
		} else {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
		cart.push({ index: cart.length, id });
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	static getCart() {
		if (JSON.parse(localStorage.getItem('cart')) === null) {
			return [];
		}
		return JSON.parse(localStorage.getItem('cart'));
	}

	static updateCart(newCart) {
		localStorage.setItem('cart', JSON.stringify(newCart));
	}
}
