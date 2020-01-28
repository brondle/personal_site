$(window).scroll(function(){
    var move = function() {
        console.log("foo")
        var st = $(window).scrollTop();
        var header = $("#page-header");
        var ot = header.height();
        var s = $("#navbar-wrapper");
		var width = $(window).width();

        if(st > (ot) && width >= 950) {
            s.css({
                position: "fixed",
                top: "106px"
            });
            header.css({
                "font-size": "2em"
            });
        } else {
            if(st <= (ot) && width >= 950) {
                s.css({
				    top: "138px"
                });
                header.css({
                    "font-size": "3em"
                });
            }
        }
    };
    $(window).scroll(move);
    move();
});
