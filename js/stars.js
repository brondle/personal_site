function populate() {
  'use strict';
  var stars = $("#stars");
  var delay = 50;

  for (var x=0; x < $(window).width(); x += 15) {
      var height = Math.random() * stars.height()
      var diameter = Math.random() * 10;
      var dString = diameter.toString() + "px";
      var radius = diameter/2;
      var rString = radius.toString() + "px";
      var infoWidth = $(".display").width();
      var infoX = parseInt($("main").css("marginLeft"));
      if ((x < (infoX - 40)) || (x > (infoX + infoWidth + 40))) {
        var star = $("<div class='circle'>")
                .prop("type", "text/css")
                .css({
                  top: height.toString() + "px",
                  left: x.toString() + "px",
                  width: dString,
                  height: dString,
                  "-webkit-border-radius": "50%",
                  "-moz-border-radius": "50%",
                  'border-radius': "50%",
                  background: "white",
                }).appendTo($("#stars")).hide().delay(delay).fadeIn('slow');
      delay += (Math.random() * 1500);

    }
  }
}
