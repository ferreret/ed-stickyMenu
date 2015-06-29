$(document).ready(function () {
	
	var $nav = $('nav');
	var $p = $nav.find('p');
	var $navTop = $nav.offset().top;

	var pegarNav = function () {
		var $sTop = $(window).scrollTop();
		if ($sTop >= $navTop) {
			$nav.addClass('sticky');
		} else {
			$nav.removeClass('sticky');
		}
	};

	//alert('hola');
	/*$(window).on('scroll', function () {
		var $scrollTop = $(window).scrollTop();
		$p.text("El scroll es " + $scrollTop + "px");		
	});*/
	$(window).on('scroll', pegarNav);
});

