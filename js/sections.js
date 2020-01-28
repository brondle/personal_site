$(window).load(function() {
  console.log("Welcome to the hacker zone of my website. Anything is possible here.");
  $("a.nav-link").click(function() {
    var id = $(this).attr("val");
    if (!$("#" + id).hasClass("display") && id != "blog") {
      $("#" + id).addClass("display");
      $("#" + id).removeClass("hidden");
    }
    $("section").each(function() {
      if (id != "blog") {
        if ($(this).attr("id") != id) {
          $(this).addClass("hidden");
          $(this).removeClass('display');
        }
      }
    });
  });
})
