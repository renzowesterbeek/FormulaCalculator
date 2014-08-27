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