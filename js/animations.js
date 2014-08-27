$(document).ready(function(){
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