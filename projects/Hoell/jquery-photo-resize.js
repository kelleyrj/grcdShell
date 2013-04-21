/// <reference path="jquery-1.5.1.min.js" />

/*
* Adjust photo on browser window resize
* 
* @example: $('selector').photoResize();
* 
* @example:
	$('selector').photoResize({
		bottomSpacing:"Bottom Spacing adjustment"
	});
*/

(function ($) {

	$.fn.photoResize = function (options) {

		var element	= $(this), 
			defaults = {
	            bottomSpacing: 10
			};
		
		$(element).load(function () {
			updatePhotoWidth();

			$(window).bind('resize', function () {
				updatePhotoWidth();
			});
		});

		options = $.extend(defaults, options);

		function updatePhotoWidth() {
			var o = options, 
				photoWidth = $(window).width();

			$(element).attr('width', photoWidth - o.bottomSpacing);
		}
	};

}(jQuery));