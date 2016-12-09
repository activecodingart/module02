(function($) {
	
	$(document).ready(function() {
		
		var $mobileMenuBtn = $('.mobile-menu-btn'),
			$navbar = $('.navbar');
		
		$mobileMenuBtn.on('click', function() {

			$mobileMenuBtn.toggleClass('show-menu');
			$navbar.toggleClass('show-menu');

		});
		
		$('.slider__list').slick({
				dots: true,
				infinite: true,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 4000,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true
			});
		
		
	}); /*document.ready*/
	
})(jQuery);