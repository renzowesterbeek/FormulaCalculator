$(document).ready(function(){
	// Displays alert when the user goes to site for first time.
	if (getCookie("firstEnter") !== "no") {
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
		setCookie("firstEnter", "no", 365);
	});
	
	$("#inputField").focus(function(){
		animateAnsOut();
	});

});