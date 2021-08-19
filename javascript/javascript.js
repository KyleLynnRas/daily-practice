//https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen

function vowelsAndConsonants(s) {
	//make everything lowercase
	const string = s.toLowerCase();
	const stringArr = string.split("");
	//log each vowel
	let consArr = [];
	stringArr.forEach((ele) => {
		if (
			ele === "a" ||
			ele === "e" ||
			ele === "i" ||
			ele === "o" ||
			ele === "u"
		) {
			console.log(ele);
		} else {
			consArr.push(ele);
		}
	});
	for (cons of consArr) {
		console.log(cons);
	}
}

// vowelsAndConsonants("I choose you pikachu")

//https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem

function getArea(length, width) {
	let area;
	area = length * width;
	return area;
}

function getPerimeter(length, width) {
	let perimeter;
	perimeter = 2 * (length + width);
	return perimeter;
}

//https://www.hackerrank.com/challenges/js10-function/problem

function factorial(n) {
	let factN = 1;
	for (let i = n; i >= 1; i--) {
		factN = factN * i;
	}
	return factN;
}

// console.log(factorial(4));

//https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript

function lastSurvivor(letters, coords) {
	const letterArr = letters.split("");
	let coordLength = letterArr.length - 1;
	for (let i = 0; i < coordLength; i++) {
		letterArr.splice(coords[i], 1);
	}
	const answer = letterArr.join();
	return answer;
}

// lastSurvivor("abc", [1,1])

//https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight) {
	let rightSd = 0;
	let leftSd = 0;

	const stringArr = fight.split("");

	stringArr.forEach((ele) => {
		if (ele === "w") {
			leftSd = leftSd + 4;
		} else if (ele === "p") {
			leftSd = leftSd + 3;
		} else if (ele === "b") {
			leftSd = leftSd + 2;
		} else if (ele === "s") {
			leftSd = leftSd + 1;
		} else if (ele === "m") {
			rightSd = rightSd + 4;
		} else if (ele === "q") {
			rightSd = rightSd + 3;
		} else if (ele === "d") {
			rightSd = rightSd + 2;
		} else if (ele === "z") {
			rightSd = rightSd + 1;
		}
	});

	let answer;

	rightSd > leftSd
		? (answer = "Right side wins!")
		: leftSd > rightSd
		? (answer = "Left side wins!")
		: (answer = "Let's fight again!");

	return answer;
}

// console.log(alphabetWar("meow"))

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x) {
	let newString = x.split("");
	let stringArr = newString.filter((ele) => {
		if (ele !== " ") {
			return ele;
		}
	});
	const answer = stringArr.join("");
	return answer;
}

noSpace("testing 123");

//https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
	const beastArr = beast.split("");
	const dishArr = dish.split("");
	let answer;
	dishArr[0] === beastArr[0] &&
	dishArr[dishArr.length - 1] === beastArr[beastArr.length - 1]
		? (answer = true)
		: (answer = false);
	return answer;
}

feast("chickadee", "chocolate cake");

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
	findSmallestInt(args) {
		let answer = Math.min(...args);
		return answer;
	}
}

//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function (n) {
	if (n >= 0) {
		let square = Math.sqrt(n);
		square = Math.round(square);
		console.log(square);
		let answer;
		const squareRt = square * square;
		squareRt === n ? (answer = true) : (answer = false);
		return answer;
	} else {
		return false;
	}
};

isSquare(25);

//https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

function vaporcode(string) {
	//to uppercase
	let vaporString = string.toUpperCase();
	vaporString = vaporString.split("");

	vaporString.map((ele, index) => {
		if (ele === " ") {
			vaporString.splice(index, 1);
		}
	});

	vaporString = vaporString.join("  ");
	return vaporString;
}

vaporcode("meow's today");
