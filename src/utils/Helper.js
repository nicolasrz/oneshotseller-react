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

	static checkEmail(email) {
		if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) {
			return true;
		}
		return false;
	}

	static getTotalPrice(articles) {
		let totalPrice = 0;
		for (let i in articles) {
			totalPrice += articles[i].price;
		}
		totalPrice = parseFloat(totalPrice).toFixed(2);
		return totalPrice;
	}
}
