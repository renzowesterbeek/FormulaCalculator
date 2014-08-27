function contains(s, bs) {
	return s.indexOf(bs) > -1 ? true : false;
}

function getOperator(formula, numToCheck) {
	var numIndex = formula.indexOf(numToCheck);
	if(numIndex != 0){
		if(formula[numIndex-1] === "-" && formula[numIndex-2] !== "-"){
			return "-"
		} else {
			return "+";
		}
	} else {
		return "+";
	}
}

function getABCVals(input) {
	var originalInput = input;
	var partsArray = input.split(/\+|-/);
	var a, b, c;
	
	for(var i = 0; i < partsArray.length; i++){
	var part = partsArray[i];
		if (contains(part, "^")) {
			a = part.slice(0, part.length-3);
		} else if (contains(part, "x")){
			b = part.slice(0, part.length-1);
		} else {
			c = part;
		}
	}
	
	var aOp = getOperator(originalInput, a);
	var bOp = getOperator(originalInput, b);
	var cOp = getOperator(originalInput, c);
	
	function convertToNum(part, partOp) {
		var returnS = parseFloat(part);
		if (part !== undefined){
			if (partOp == "+") {
				return returnS;
			} else {
				return -returnS;
			}
		} else {
			return 0;
		}
	}
	
	return [convertToNum(a, aOp), convertToNum(b, bOp), convertToNum(c, cOp)];
}


function calcX(a, b, c) {
	
	var d = (b)*(b)-4*a*c;
	var sqrtD = math.sqrt(d);
	
	var x1 = (-b-sqrtD)/(2*a);
	var x2 = (-b+sqrtD)/(2*a);
	
	return [x1, x2, d];
}