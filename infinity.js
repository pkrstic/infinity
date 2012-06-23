/**
 * Infinity
 * https://github.com/pkrstic/infinity
 *
 * Copyright 2012, Predrag Krstic Licensed under the MIT license. see
 * LICENSE.txt
 *
 * @author Predrag Krstic
 *
 * @verson 1.0
 *
 */
;
(function($) {
    $.fn.infinity = function(options) {
        var globalOptions = $.extend({
            url : null,
            page : 'page',
            currentPage : 1,
            bottomTrigger : 200,
            loading : '#infiniteLoading',
            load : function() {},
            error : function(data) {}
        }, options);

        return this.each(function() {
            var self = this, 
	            o = {
	                url : $(self).data('url') || globalOptions.url,
	                page : $(self).data('page') || globalOptions.page,
	                currentPage : $(self).data('currentpage') || globalOptions.currentPage,
	                bottomTrigger : $(self).data('bottomtrigger') || globalOptions.bottomTrigger,
	                loading : $(self).data('loading') || globalOptions.loading,
	                load : $(self).data('load') || globalOptions.load,
	                error : $(self).data('error') || globalOptions.error
	            },
	            loadInProgress = false;
			
            $(window).bind('scroll', function() {
            	if (loadInProgress) {
            		return ;
            	}
            	
                if ($(window).scrollTop() >= $(document).height() - $(window).height() - o.bottomTrigger) {
                    $(o.loading).show();
                    loadInProgress = true;
                    $.ajax({
                        url : o.url,
                        data : o.page + '=' + o.currentPage,
                        type : "GET",
                        error : function() {
                            $(o.loading).hide();
                            loadInProgress = false;
                            if (typeof (o.error) == 'string') {
                                o.error = eval(o.error);
                            }
                            o.error();
                        },
                        success : function(data) {
                            o.currentPage++;
                            $(o.loading).hide();
                            loadInProgress = false;
                            if (typeof (o.load) == 'string') {
                            	o.load = eval(o.load);
                            }
                            o.load(data);
                        }
                    });
                }
            }).scroll();
        });
    };
})(jQuery);