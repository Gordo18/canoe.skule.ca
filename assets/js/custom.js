$(document).ready(miscelements);

var $grid = $('.canoe').isotope({
	itemSelector: '.canoe-item',
	layoutMode: 'fitRows',
	getSortData: {
		year:'.iyear',
		name:'.iname',
		status:'.istatus',
		stand:'.istand',
		length:'.ilength',
		weight: '.iweight'
	},
	sortAscending: {
		year:false,
		name:true,
		status:true,
		stand:true,
		length:false,
		weight:false
	},
});

$(window).on('resize', resetGrid);
	
function miscelements(){
	//$("#design").hover(din, dout);
	introFade();
	prettyGallery();
	resetGrid();
	$('.iso-sort').on( 'click', 'button', function() {
		var sortValue = $(this).attr('data-iso-sort');
		$grid.isotope({ sortBy: sortValue });
		$('.iso-sort button.active').removeClass("active");
		$(this).addClass('active');
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

// isotope
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

function setColumns() {
	var winWidth = $(window).width();
	var columnNumber = getColumnNumber();
	var itemWidth = Math.floor(winWidth / columnNumber);

	$grid.find('.canoe-item').each(function() { 
		$(this).css("width", itemWidth);
	});
}

function resetGrid() { 
	setColumns();
	$grid.isotope('layout');
}