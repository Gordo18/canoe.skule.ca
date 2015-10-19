$(document).ready(miscelements);

function miscelements(){
	//$("#design").hover(din, dout);
	pretty();
}

/*function din(){
	$("#design span").show(400,"linear");
}

function dout(){
    $("#design span").hide(400);
}
**/
// prettyPhoto
function pretty(){
	jQuery('a[data-gal]').each(function() {
		jQuery(this).attr('rel', jQuery(this).data('gal'));
	});  	
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
}