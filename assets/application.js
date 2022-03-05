function carousel() {
	return {
		active: 0,
		init() {
			var flkty = new Flickity(this.$refs.carousel, {
				autoPlay: 2500,
				wrapAround: true,
			});
			flkty.on('change', (i) => (this.active = i));
		},
	};
}

function carouselFilter() {
	return {
		active: 0,
		changeActive(i) {
			this.active = i;

			this.$nextTick(() => {
				let flkty = Flickity.data(this.$el.querySelectorAll('.carousel')[i]);
				flkty.resize();

				console.log(flkty);
			});
		},
	};
}

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
					this.$dispatch('cart-updated');
					this.$dispatch('toggle-cart');
				})
				.catch((error) => {
					console.error('Error:', error);
				});
		},
	};
}
