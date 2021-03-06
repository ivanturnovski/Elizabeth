function myComponentAddToCart() {
	return {
		AddToCart(refs) {
			console.log(refs.variant_id.value);
			let formData = {
				items: [
					{
						id: refs.variant_id.value,
						quantity: 1,
					},
				],
			};
			fetch('/cart/add.js', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					this.$dispatch('cart-products');
					this.$dispatch('cart-updated');
					this.$dispatch('toggle-cart');
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		},
	};
}

let Elizabeth = {
	updateQuantity(line, qty) {
		fetch('/cart/change.js', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ quantity: qty, line: line }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('The the cart is updated');
				window.dispatchEvent(new Event('cart-products'));
				window.dispatchEvent(new Event('cart-updated'));
			})
			.catch((error) => {
				console.log('Error', error);
			});
	},

	getCartProducts(refs) {
		fetch('/cart.js')
			.then((data) => data.json())
			.then((data) => {
				refs.cart_product_count.innerHTML = `(${data.items.length}) Items`;
				console.log(data.items.length);
			});
	},

	getHeaderCartProducts(refs) {
		fetch('/cart.js')
			.then((data) => data.json())
			.then((data) => {
				refs.header_cart_product_count.innerHTML = data.items.length;
			});
	},
};

window.Elizabeth = Elizabeth;
