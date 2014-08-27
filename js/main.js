function initCalc (formula) {
	// Checks if formula inptu is set
	if (formula != 0) {
		var abcVals = getABCVals(formula);
		var XnDVals = calcX(abcVals);
		console.log(XnDVals);
	}
}