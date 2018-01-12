export default class Helper {
	static setItem(id) {
		let cart = localStorage.getItem('cart');
		if (cart === null) {
			cart = [];
		} else {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
		cart.push(id);
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	static getCart() {
		return JSON.parse(localStorage.getItem('cart'));
	}
}
