function initCalc (formula) {
	// Checks if formula input is set
	if (formula != 0) {
		var abcVals = getABCVals(formula);
		var XnDVals = calcX(abcVals);
		if (XnDVals === false) {
			answer.innerHTML = "No Solution...";
		} else {
			answer.innerHTML = 
			"a = " + XnDVals[0] + "; b = " + XnDVals[1] + "; c = " + XnDVals[2] +
			"<br>discriminant = " + XnDVals[3] +
			"<br>x = " + XnDVals[4] + " or x = " + XnDVals[5];
		}
	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}