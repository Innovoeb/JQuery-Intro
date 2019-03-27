
// JQuery on page-load globak
$(document).ready(function() {
  $(".section").on("click", "h4", function() {
    const saucy = $(this).siblings('.saucy')
    if (saucy.hasClass("animation")) {
      saucy.removeClass("animation");
    } else {
      saucy.addClass("animation")
    }
  });

});
