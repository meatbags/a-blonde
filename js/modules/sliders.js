class Sliders {
  constructor() {
    // slick sliders
    this.createSliders();
  }

  createSliders() {
    const $SS = $('.slick-slider').slick({
			infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
			dots: false,
			arrows: false,
			centerMode: true,
			variableWidth: true,
		  responsive: [{
      	breakpoint: 960,
      	settings: {
          slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true
      	}
    	}]
		});

    // force move to slide
		$('.slick-slide').click(() => {
			$SS.slick('slickGoTo', parseInt($(this).data('slickIndex')));
	  });
  }
}

export { Sliders };
