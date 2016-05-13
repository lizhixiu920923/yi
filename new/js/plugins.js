// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }


   ;(function($){
    $.fn.jcMarquee = function(options) {
        var defaults = {
            'marquee':'x',
            'margin_bottom':'0',
            'margin_right':'0',
            'speed':'10'
        };
        var options = $.extend(defaults,options);
        return this.each(function() {
            var $marquee = $(this),
                $marquee_scroll = $marquee.children('ul');
            $marquee_scroll.append("<li class='clone'>"+"</li>");
            $marquee_scroll.find('li').eq(0).children().clone().appendTo('.clone');
            var $marquee_left = $marquee_scroll.find('li');
            if (options.marquee == 'x') {
                var x = 0;
                $marquee_scroll.css('width','1000%');
                $marquee_left.find('div').css({'margin-right':options.margin_right});
                $marquee_left.css({'margin-right':options.margin_right});
                function Marquee_x(){
                    $marquee.scrollLeft(++x);
                    _margin = parseInt($marquee_left.find('div').css('margin-right'));
                    if(x==$marquee_left.width()+_margin) { x = 0 };
                };
                var MyMar=setInterval(Marquee_x,options.speed);
                $marquee.hover(function(){
                    clearInterval(MyMar);
                },function(){
                    MyMar=setInterval(Marquee_x,options.speed);
                });
            }
            if (options.marquee == 'y') {
                var y = 0;
                $marquee_scroll.css('height','1000%');
                $marquee_left.find('div').css('margin-bottom',options.margin_bottom);
                $marquee_left.css('margin-bottom',options.margin_bottom);
                function Marquee_y(){
                    $marquee.scrollTop(++y);
                    _margin = parseInt($marquee_left.find('div').css('margin-bottom'));
                    if(y==$marquee_left.height()+_margin) { y = 0 };
                };
                var MyMar=setInterval(Marquee_y,options.speed);
                $marquee.hover(function(){
                    clearInterval(MyMar);
                },function(){
                    MyMar=setInterval(Marquee_y,options.speed);
                });
            };
        });
    };
})(jQuery)

// 康复护理
 $(".r-area-line1 select").last().css({marginRight:0})
}());

// Place any jQuery/helper plugins in here.
