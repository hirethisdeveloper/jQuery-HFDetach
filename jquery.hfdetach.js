(function(jQuery) {
	var _hfconfig = {
			debug: 0,
			detach: 1,
			thisobject: null,
			zindex: 500,
			opt_obj: null
		};
	
	var methods = {
		init : function( options ) {
			
			if (_hfconfig.debug == 1) console.log("hfdetach: init called");
			if (options) {
				jQuery.extend( _hfconfig, options );
			}
			
			_hfconfig.thisobject = $(this);
			if (_hfconfig.debug == 1) console.log(_hfconfig);
			
        	jQuery(window).bind('resize', 	methods.reportPosition);
			jQuery(window).bind('scroll', 	methods.reportPosition);
			jQuery(document).bind('load', 	methods.reportPosition);
			jQuery(window).bind('load', 	methods.reportPosition);
		},
		reportPosition : function() {
						
			if (_hfconfig.debug == 1) console.log("hfdetach: reportPosition called");
			
			var window_height 	= jQuery(window).height();
			var document_height = jQuery(document).height();
			var difference 		= (document_height - window_height);
			var scrolltop 		= jQuery(document).scrollTop();
			var object_height 	= _hfconfig.thisobject.height();
			var opt_obj			= _hfconfig.opt_obj.height();
			var threshold 		= difference - object_height + opt_obj;
			
			var detach = 1;

			if (_hfconfig.debug == 1) {
				console.log("============================================================");
				console.log("window height: " + window_height);
				console.log("document height: " + document_height);
				console.log("difference: " + difference);
				console.log("document scrolltop: " + scrolltop);
				console.log("object_height: " + object_height);
				console.log("opt_obj height: " + opt_obj);
				console.log("threshold: " + threshold);
			}
			
			if (scrolltop >= threshold) { 
				if (_hfconfig.debug == 1) console.log("threshold met");
				detach = 0;
			}
			
			_hfconfig.detach = detach;
			methods.run();
		},
		run : function() {
			if (_hfconfig.debug == 1) console.log("hfdetach: run called");
			if (_hfconfig.debug == 1) console.log("hfdetach: detach: ["+_hfconfig.detach+"]");
			
			if (_hfconfig.detach == 1) {
				if (_hfconfig.debug == 1) console.log("hfdetach: detaching");
				_hfconfig.opt_obj.css({'position':'fixed','bottom':'0px','z-index':_hfconfig.zindex});	
			}
			else {
				if (_hfconfig.debug == 1) console.log("hfdetach: reattaching");
				_hfconfig.opt_obj.css({'position':'static','bottom':'auto','z-index':_hfconfig.zindex});	
			}
		}
	};


	jQuery.fn.hfdetach = function( method ) { 		
				
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
      		return methods.init.apply( this, arguments );
   	 	} else {
      		jQuery.error( 'Method ' +  method + ' does not exist on jQuery.hfdetach' );
    	}
	
	};
	
})(jQuery);
