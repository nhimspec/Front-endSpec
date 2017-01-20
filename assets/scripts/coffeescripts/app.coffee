$ ->
	# Menu Click
	$('a[href*="#"]:not([href="#"]):not([role="tab"])').click ->
  		if document.location.pathname.replace(/^\//, '') == @pathname.replace(/^\//, '') and document.location.hostname == @hostname
    		target = $(@hash)
    		target = if target.length then target else $('[name=' + @hash.slice(1) + ']')
    		if target.length
      		$('html, body').animate { scrollTop: target.offset().top }, 1000
      		return false
  		return

  	# WOW Initial
  	(new WOW).init()
  	
  	# OWL CAROUSEL
 	$('#testimonials .item-testimonials').owlCarousel
	  	loop: true
	  	items: 1
	  	navText: ["<img src='assets/images/arrow_left.png'>","<img src='assets/images/arrow_right.png'>"],
	  	responsive:
		    0:
		      nav: false
		      dots: true
		    991:
		      nav: true
		      dots: false


	# INITIAL GRID
 	$grid = $('#porfolio .items').isotope(
	  	itemSelector: '#porfolio .item'
	  	percentPosition: true
	  	masonry: columnWidth: '.item-sizer')
 	
	# filter button click
	$('.tope').click ->
	  	filterValue = $(this).attr('data-filter')
	  	$grid.isotope filter: filterValue
	  	$('.tope').removeClass 'active'
	  	$(this).addClass 'active'
