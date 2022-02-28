function carousel() {
	return {
	  active: 0,
	  init() {
		var flkty = new Flickity(this.$refs.carousel, {			
			autoPlay: 2500, 		
		  	wrapAround: true
		});
		flkty.on('change', i => this.active = i);
	  }
	}
  }
  
  function carouselFilter() {
	return {
	  active: 0,
	  changeActive(i) {
		this.active = i;
		
		this.$nextTick(() => {
		  let flkty = Flickity.data( this.$el.querySelectorAll('.carousel')[i] );
		  flkty.resize();
		  
		  console.log(flkty);
		});
	  }
	}
  }
