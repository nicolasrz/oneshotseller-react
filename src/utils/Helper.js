export default class Helper {
	static addItem(id) {
		const cart = this.getCart();
		cart.push({ index: cart.length, id });
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	static getCart() {
		if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === '') {
			return [];
		}
		return JSON.parse(localStorage.getItem('cart'));
	}

	static updateCart(newElems) {
		localStorage.setItem('cart', JSON.stringify(newElems));
	}
}
