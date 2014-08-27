$(document).ready(function(){
	
	$( "#submit" ).click(function() {
		$("#ansContainer").animate({
			marginTop: 0
		}, 2000, function() {
			// Animation complete.
		});	
	});

});