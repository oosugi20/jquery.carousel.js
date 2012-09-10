/*!
 * jquery.throttlingResize.js
 */
;(function ($, window, undefined) {

	var DEFAULT_OPTIONS
		  , _timer = {}
		  ;


	/**
	 * DEFAULT_OPTIONS
	 */
	DEFAULT_OPTIONS = {
		interval: 250
	  , eventName: 'throttlingResize'
	  , targetSelector: null
	};


	/**
	 * $.throttlingResize
	 */
	$.throttlingResize = function (options) {
		var o = $.extend({}, DEFAULT_OPTIONS, options)
		  , $target = (o.targetSelector) ? $(o.targetSelector) : $(window)
		  , name = o.eventName + o.interval
		  ;

		if (!$target.data(name)) {
			$target
				.data(name, true)
				.on('resize', function () {
					if (_timer[name]) {
						clearTimeout(_timer[name]);
						_timer[name] = null;
					}

					_timer[name] = setTimeout(function () {
						$target.trigger(name);
						_timer[name] = null;
					}, o.interval);
				})
				;
		}

		return $target;
	};

})(jQuery, this);
