/*!
 * jquery.throttingResize.js
 */
;(function ($, window, undefined) {

	var DEFAULT_OPTIONS;


	/**
	 * DEFAULT_OPTIONS
	 */
	DEFAULT_OPTIONS = {
		interval: 250
	  , eventName: 'throttingResize'
	  , targetSelector: null
	};


	/**
	 * $.throttingResize
	 */
	$.throttingResize = function (options) {
		var o = $.extend(DEFAULT_OPTIONS, options)
		  , $target = (o.targetSelector) ? $(o.targetSelector) : $(window)
		  , _timer = null
		  ;

		if (!$target.data(o.eventName)) {
			$target
				.data(o.eventName, true)
				.on('resize', function () {
					if (_timer) {
						clearTimeout(_timer);
						_timer = null;
					}

					_timer = setTimeout(function () {
						$target.trigger(o.eventName);
						_timer = null;
					}, o.interval);
				})
				;
		}

		return $target;
	};

})(jQuery, this);
