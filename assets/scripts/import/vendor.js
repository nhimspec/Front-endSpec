//@prepros-prepend ../../vendor/jquery/dist/jquery.min.js
//@prepros-prepend ../../vendor/smoothscroll-for-websites/SmoothScroll.js
//@prepros-prepend ../../vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js
//@prepros-prepend ../../vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js
//@prepros-prepend ../../vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js
//@prepros-prepend ../../vendor/owl.carousel/dist/owl.carousel.min.js
//@prepros-prepend ../../vendor/isotope/isotope.pkgd.min.js
//@prepros-prepend ../../vendor/wow/dist/wow.min.js

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
