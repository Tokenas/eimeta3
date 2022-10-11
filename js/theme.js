(function($) {
  "use strict";

  // collapse navbar

  var navbarCollapse = function() {
    if (jQuery("#mainNav").offset().top > 100) {
      jQuery("#mainNav").addClass("navbar-scrolled");
    } else {
      jQuery("#mainNav").removeClass("navbar-scrolled");
    }
  };
  navbarCollapse();
  jQuery(window).scroll(navbarCollapse);

})(jQuery);
