//@codekit-prepend "../../vendor/jquery/dist/jquery.min.js"
//@codekit-prepend "../../vendor/smoothscroll-for-websites/SmoothScroll.js"
//@codekit-prepend "../../vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js"
//@codekit-prepend "../../vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js"
//@codekit-prepend "../../vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js"
//@codekit-prepend "../../vendor/owl.carousel/dist/owl.carousel.min.js"
//@codekit-prepend "../../vendor/isotope/isotope.pkgd.min.js"
//@codekit-prepend "../../vendor/wow/dist/wow.min.js"

(function() {
  (function() {
    'use strict';
    var msViewportStyle;
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      msViewportStyle = document.createElement('style');
      msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
      document.head.appendChild(msViewportStyle);
    }
  })();
  SmoothScroll();
}).call(this);
