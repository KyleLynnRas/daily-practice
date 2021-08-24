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

//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
	const answerArr = [];

	nums.map((ele, index) => {
		//remove current ele
		nums.map((e, i) => {
			if (e + ele === target && answerArr.length === 0) {
				answerArr.push(index, i);
			}
		});
	});

	// console.log(answerArr);
};

twoSum([3, 3], 6);

//https://www.hackerrank.com/challenges/js10-let-and-const/problem

function main(r) {
	// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
	const PI = Math.PI;
	// const r = readLine();
	// Print the area of the circle:
	const area = PI * (r * r);
	console.log(area);
	// Print the perimeter of the circle:
	const perim = 2 * (PI * r);
	console.log(perim);
}

// main(2.6);

//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript

function loopArr(arr, direction, steps) {
	let answer = arr;

	if (direction === "left") {
		//shift
		for (let i = 0; i < steps; i++) {
			let moved = answer.shift();
			answer.push(moved);
		}
		console.log(answer);
	} else {
		//pop
		for (let i = 0; i < steps; i++) {
			let moved = answer.pop();
			//add to front of array
			answer.unshift(moved);
		}
		console.log(answer);
	}
}

// loopArr([1, 5, 87, 45, 8, 8], 'left', 2);

//https://www.codewars.com/kata/5859c82bd41fc6207900007a/train/javascript

function quotable(name, quote) {
	const answer = `${name} said: "${quote}"`;
	return answer;
}

quotable("Ash", "I choose you Pikachu!");

//https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript

const prevMultOfThree = (n) => {
	let numArr = [...`${n}`];
	// console.log(numArr)
	//orig bc pop off each time
	const origLength = numArr.length;
	console.log(origLength);
	let finalAnswer;
	for (let i = 0; i <= origLength; i++) {
		console.log("i" + i);
		//length 1
		if (numArr.length === 1 && numArr[0] % 3 === 0) {
			finalAnswer = numArr.join("");
			return parseInt(finalAnswer);
			//return issue
		} else if (numArr.length === 1 && numArr[0] % 3 !== 0) {
			return null;
			//length 2 +
		} else {
			//join to full number
			let newNum = numArr.join("");
			console.log(newNum);
			if (newNum % 3 === 0) {
				finalAnswer = parseInt(newNum);
				return finalAnswer;
			} else {
				numArr.pop();
			}
		}
	}
};

// prevMultOfThree(952406);
