/*

*/
Object.defineProperty(Number.prototype, 'b', {set:function(){return false;},get:function(){return parseInt(this, 2);}});

var mask = 1073741823;	//0x3FFFFFFF
var iv1 = 204;			//CC
var iv2 = 51;			//51
var iv3 = 170;			//AA
var iv4 = 85;			//55
var ls1 = 24;			//dec values
var ls2 = 16;
var ls3 = 8;

// takes decimals
function shiftLeft(bitValue, shift) {
	return ((bitValue << shift)>>>0);
}

function text2bin(text2Convert) {
	var i;
	var j;
	var returnBinary = '';
	var tempBinary;
	var tempBLen;
	
	for (i = 0; i < text2Convert.length; i++) {
		tempBinary = text2Convert[i].charCodeAt(0).toString(2);
		if (tempBinary.length < 8) {
			tempBLen = 8 - tempBinary.length;
			for (j = 0; j < tempBLen; j++) {
				tempBinary = '0' + tempBinary;
			}
		}
		returnBinary += tempBinary;
	}
	return returnBinary;
}

function binary2hex(text2Convert) {
	var hexArray = [];
	var tempByte;
	var hexValue = '';
	var start = 0;
	var increment = 8;
	
	for (var i = 0; i < text2Convert.length/8; i++) {
		tempByte = text2Convert.substring(start, start+increment);
		start += increment;
		hexArray[i] = bin2hex(tempByte);
	}
	
	for (var j = 0; j < hexArray.length; j++) {
		hexValue += hexArray[j];
	}
	
	return hexValue;
}

// does XOR on two values, text/dec, returns decimal
function calcXOR (textA, decB) {

	var binA = text2bin(textA);
	var decA = bin2dec(binA);
	
	var decXOR = decA ^ decB;
	return decXOR;
}

function wha (varString) {

	var stringArray = [];
	var i;
	var tbyte, iv;
	var block1, block2, block3, block4;
	
	var outHash = 0;
	var oh1, oh2;
	
	//drop the string into an array per letter
	for (i = 0; i < varString.length; i++) {
		stringArray[i] = varString.charAt(i);
	}

	//compute iv per byte
	for (i = 0; i < stringArray.length; i++) {
		tbyte = stringArray[i];
	
		// block 1
			//XOR iv1
			block1 = calcXOR(tbyte, iv1);
			//LS ls1
			block1 = shiftLeft(block1, ls1);
		// block 2
			//XOR iv2
			block2 = calcXOR(tbyte, iv2);
			//LS ls2
			block2 = shiftLeft(block2, ls2);
		// block 3
			//XOR iv3
			block3 = calcXOR(tbyte, iv3);
			//LS ls3
			block3 = shiftLeft(block3, ls3);
		// block 4
			//XOR iv4
			block4 = calcXOR(tbyte, iv4);
		// OR 4 blocks together
			iv = (block1 | block2 | block3 | block4)>>>0;

		//outhash part 1
		oh1 = outHash & mask;
		//outhash part 2
		oh2 = iv & mask;
		//final outHash
		outHash = oh1 + oh2;
	}

	// convert string to binary
	//var whaBinary = text2bin(varString);
	//var whaHex = binary2hex(whaBinary);
	
	return dec2hex(outHash);

}