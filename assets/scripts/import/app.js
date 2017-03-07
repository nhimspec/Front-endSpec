(function() {
  $(function() {
    var $grid;
    $('a[href*="#"]:not([href="#"]):not([role="tab"])').click(function() {
      var target;
      if (document.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && document.location.hostname === this.hostname) {
        target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    (new WOW).init();
    $('#testimonials .item-testimonials').owlCarousel({
      loop: true,
      items: 1,
      navText: ["<img src='assets/images/arrow_left.png'>", "<img src='assets/images/arrow_right.png'>"],
      responsive: {
        0: {
          nav: false,
          dots: true
        },
        991: {
          nav: true,
          dots: false
        }
      }
    });
    $grid = $('#porfolio .items').isotope({
      itemSelector: '#porfolio .item',
      percentPosition: true,
      masonry: {
        columnWidth: '.item-sizer'
      }
    });
    return $('.tope').click(function() {
      var filterValue;
      filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
      $('.tope').removeClass('active');
      return $(this).addClass('active');
    });
  });

}).call(this);

