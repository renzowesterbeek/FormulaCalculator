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


function calcX(abcArray) {
	var a = abcArray[0];
	var b = abcArray[1];
	var c = abcArray[2];
	
	var d = (b)*(b)-4*a*c;
	
	var x1 = undefined;
	var x2 = undefined;
	
	if (d === 0) {
		var sqrtD = Math.sqrt(d);
		x1 = (-b-sqrtD)/(2*a);
	} else if (d > 0) {
		var sqrtD = Math.sqrt(d);
		x1 = (-b-sqrtD)/(2*a);
		x2 = (-b+sqrtD)/(2*a);
	} else {
		return false;
	}
	
	return [a, b, c, d, x1, x2];
}