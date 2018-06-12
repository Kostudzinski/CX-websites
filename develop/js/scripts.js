window.$ = window.jQuery  = require("jquery");
require('bootstrap');
require('waypoints/lib/jquery.waypoints');
window.Swiper = require('swiper');
require('./common');
require('./sliders');

$(document).ready(function ($) {

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	});

	$('.hamb').click(function (e) {
		e.preventDefault();

		$(this).toggleClass('open');
		$(this).parent().toggleClass('opened');
	});

});