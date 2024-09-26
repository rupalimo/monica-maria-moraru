// function menu(evt, projectName) {

//   menufocus = document.getElementsByClassName("menufocus");
//   for (i = 0; i < menufocus.length; i++) {
//     menufocus[i].className = menufocus[i].className.replace(" active", "");
//   }
  
//   evt.currentTarget.className += " active";
// }

// using jquery:
// $('.menu--nav div a').click(function () {
// 	var that = $(this);
// 	that.addClass('active');
// 	that.parent().siblings().find('a').removeClass('active');
// });

var goToByScroll = function (id) {
	$('html,body').animate({ scrollTop: $('#' + id).offset().top }, 'slow');
};

//create a list of all elements to be tested against
var scrollMatches = [
	$('#home'),
	$('#iAmAlsoP'),
	$('#notAnHou'),
	$('#antFurna'),
	$('#thereThe'),
	$('#hereItIs'),
	$('#inMyBedr'),
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
			var element = $('#menu div > a[rel=' + v.attr('rel') + ']');

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
$('#menu div a').on('click', function () {
	goToByScroll($(this).attr('rel'));
});