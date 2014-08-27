var abcVals = [];

function initCalc (formula) {
	// Checks if formula isset.
	if (formula != 0) {
		var abcArray = getABCVals(formula);
		console.log(abcArray);
	}
}