$(document).ready(function(){
	var firstEnter = true; /* change this to cookie */
	
	if (firstEnter) {
		firstEnter = false;
		$('footer').addClass('animated rotateInDownRight');
		$('#container').addClass('animated bounceInDown');
		setTimeout(function(){
			$('#firstEnterParent').addClass('animated bounceInDown');
			$('#firstEnterParent').css("display", "table");
		}, 200);
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
	
	$( "#getStarted" ).click(function() {
		$( "#firstEnterContent" ).addClass('animated zoomOutDown');
		setTimeout(function(){$( "#firstEnterParent" ).css("display", "none")}, 900);
	});
	
	$("#inputField").focus(function(){
		animateAnsOut();
	});

});