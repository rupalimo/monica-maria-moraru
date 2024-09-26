$(document).ready(function () {
	var goToByScroll = function (id) {
		$('html,body').animate({ scrollTop: $('#' + id).offset().top }, 'slow');
	};

	//create a list of all elements to be tested against
	var scrollMatches = [
		$('#photos'),
		$('#studio'),
		$('#rates'),
		$('#features'),
		$('#plan'),
		$('#contact'),
		$('#you'),
		$('#me'),
	];

	$(window).on('scroll', function () {
		//save scrolltop to var to prevent multiple callings
		var scroll = $(this).scrollTop();

		//iterate through each of the elements to be testing against
		$.each(scrollMatches, function (k, v) {
			var offset = v.offset();

			// if the element is in the viewport
			if (offset.top <= scroll && offset.top + v.outerHeight() > scroll) {
				// get associated element
				var element = $('.menu li > a[rel=' + v.attr('rel') + ']');

				// do whatever you want to the current tested element
				element.css('color', 'rgb(102, 46, 255)');

				// dp whatever you want to the associated menu item
				element.parent().siblings().find('a').css('color', 'rgb(70, 70, 70)');
				return false;
			}
		});
	});
	$(window).scroll();
	//for menu elements
	$('.menu li a').on('click', function () {
		goToByScroll($(this).attr('rel'));
	});
});
