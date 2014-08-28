$(document).ready(function(){
	var firstEnter = true; /* change this to cookie */
	
	if (firstEnter) {
		console.log("first");
	} else {
		$('footer').addClass('animated rotateInDownRight');
		$('#container').addClass('animated bounceInDown');
	}
	
	var isOut = false;
	
	function animateAnsIn() {
		$("#ansContainer").animate({
			marginTop: 0
		}, 500, function() {
			isOut = true;
		});
	}
	
	function animateAnsOut() {
		$("#ansContainer").animate({
			marginTop: -75
		}, 250, function() {
			isOut = false;
		});
	}
	
	
	
	$( "#submit" ).click(function() {
		if (isOut) {
			animateAnsOut();
			animateAnsIn();
		} else {
			animateAnsIn();
		}
	});
	
	$("#inputField").focus(function(){
		animateAnsOut();
	});

});