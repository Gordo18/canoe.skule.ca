$(document).ready(miscelements);

var $cgrid = $('.canoe').isotope({
	itemSelector: '.canoe-item',
	layoutMode: 'fitRows',
	getSortData: {year:'.iyear',name:'.iname',status:'.istatus',stand:'.istand',length:'.ilength',weight: '.iweight'},
	sortAscending: {year:false,name:true,status:true,stand:true,length:false,weight:false},
});

var $sgrid = $('.sponsor').isotope({
	itemSelector: '.sponsor-item',
	layoutMode: 'fitRows'
});

var filter = "2014";

$(window).on('resize', resetGrid);
	
function miscelements(){
	//$("#design").hover(din, dout);
	introFade();
	prettyGallery();
	resetGrid();
	
	// isotope sort canoes
	$('.iso-sort').on( 'click', 'button', function() {
		var sortValue = $(this).attr('data-iso-sort');
		$cgrid.isotope({ sortBy: sortValue });
		$('.iso-sort button.active').removeClass("active");
		$(this).addClass('active');
	});
	
	// isotope sponsor filter
	filterValue = filterList();
	$sgrid.isotope({ filter: filterValue });
	$('.iso-year').on( 'click', 'button', function() {
		$('.iso-year button.active').removeClass("active");
		$(this).addClass('active');
		filterValue = filterList();
		$sgrid.isotope({ filter: filterValue });
	});
	$('.iso-tier').on( 'click', 'button', function() {
		$('.iso-tier button.active').removeClass("active");
		$(this).addClass('active');
		filterValue = filterList();
		$sgrid.isotope({ filter: filterValue });
	});	
}

/*function din(){
	$("#design span").show(400,"linear");
}

function dout(){
    $("#design span").hide(400);
}
**/

function introFade(){
	setTimeout(function(){ 
		$(".fdes").fadeIn(5000);
	}, 1000);
}

// prettyPhoto
function prettyGallery(){
	jQuery('a[data-gal]').each(function() {
		jQuery(this).attr('rel', jQuery(this).data('gal'));
	});  	
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
}

// isotope sort: more dynamic column numbers
function getColumnNumber() { 
	var winWidth = $(window).width(), 
	columnNumber = 1;
	if (winWidth > 1200) {columnNumber = 5;}
	else if (winWidth > 950) {columnNumber = 4;}
	else if (winWidth > 600) {columnNumber = 3;}
	else if (winWidth > 400) {columnNumber = 2;}
	else if (winWidth > 250) {columnNumber = 1;}
	return columnNumber;
}

// isotope sort: alter width so isotope does the rest
function setColumns() {
	var winWidth = $(window).width();
	var columnNumber = getColumnNumber();
	var itemWidth = Math.floor(winWidth / columnNumber);

	$cgrid.find('.canoe-item').each(function() { 
		$(this).css("width", itemWidth);
	});
}

// isotope sort: called on document ready and on window resize
function resetGrid() { 
	setColumns();
	$cgrid.isotope('layout');
}

// isotope filter: changes the filter value, and returns a function that regex search on them.
function filterList() {
	var y = $('.iso-year button.active').attr('data-iso-filter');
	var t = $('.iso-tier button.active').attr('data-iso-filter');
	filter = y + t;
	return function() { var r = new RegExp(filter, 'g'); var n = $(this).find('.iso-data').text(); return n.match(r); };
}