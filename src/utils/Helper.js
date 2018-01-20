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

	static formIsCorrect(order, check) {
		if (!check) {
			if (
				order.facturation.city === '' ||
				order.facturation.firstname === '' ||
				order.facturation.lastname === '' ||
				order.facturation.number === '' ||
				order.facturation.street === '' ||
				order.facturation.zipcode === ''
			) {
				return false;
			}
		}

		if (
			order.telephone === '' ||
			order.email === '' ||
			order.delivery.city === '' ||
			order.delivery.firstname === '' ||
			order.delivery.lastname === '' ||
			order.delivery.number === '' ||
			order.delivery.street === '' ||
			order.delivery.zipcode === ''
		) {
			return false;
		}
		return true;
	}
}
