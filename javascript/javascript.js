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

//https://www.codewars.com/kata/57a06005cf1fa5fbd5000216/train/javascript

function wordsToSentence(words) {
	const answer = words.join(" ");
	return answer;
}

wordsToSentence(["hello", "world"]);

//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
	//make arr
	let stringArr = s.split("");
	//loop through find ! and remove
	let answer = stringArr.map((ele) => {
		if (ele !== "!") {
			return ele;
		}
	});

	answer = answer.join("");
	return answer;
}

removeExclamationMarks("Hello all!");

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
	let answer;
	if (n <= 12 && n > 0) {
		answer = n - 1;
	} else if (n >= 13) {
		answer = n - 2;
	} else {
		answer = n;
	}

	return answer;
}

getRealFloor(-3);

//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr(n, s) {
	let answer;
	answer = s.repeat(n);
	return answer;
}

repeatStr(6, "I");

//https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	let answer;
	distanceToPump <= mpg * fuelLeft ? (answer = true) : (answer = false);
	return answer;
};

zeroFuel(80, 25, 1.5);

//https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
	let answer;
	if (current === "green") {
		answer = "yellow";
	} else if (current === "yellow") {
		answer = "red";
	} else {
		answer = "green";
	}
	return answer;
}

updateLight("red");

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
	let stringArr = str.split("");
	stringArr.pop();
	stringArr.shift();
	stringArr = stringArr.join("");
	return stringArr;
}

removeChar("testing");

//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
	//avg
	let answer = 0;
	marks.forEach((ele) => {
		answer = answer + ele;
	});
	answer = answer / marks.length;
	answer = Math.floor(answer);
	return answer;
}

getAverage([2, 2, 2, 2]);

//https://www.hackerrank.com/challenges/js10-if-else/problem

function getGrade(score) {
	let grade;

	score > 25 && score < 30
		? (grade = "A")
		: score > 20 && score < 25
		? (grade = "B")
		: score > 15 && score < 20
		? (grade = "C")
		: score > 10 && score < 15
		? (grade = "D")
		: score > 5 && score < 10
		? (grade = "E")
		: (grade = "F");

	return grade;
}

getGrade(11);

//https://leetcode.com/problems/two-sum/submissions/

var twoSum = function (nums, target) {
	//return arr of indices of numbers that add up to target
	const answerArray = [];

	nums.forEach((ele, indx) => {
		//if array.length > 2 stop
		if (answerArray.length === 0) {
			//take ele and add try add it against all others in arr to = target
			nums.forEach((e, i) => {
				//make sure not adding to self checking indices aren't same
				if (e + ele === target && indx !== i) {
					answerArray.push(indx, i);
				}
			});
			// console.log(answerArray);
		}
	});
	return answerArray;
};

twoSum([2, 7, 11, 15], 9);

// https://leetcode.com/problems/palindrome-number/
//An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function (x) {
	let answer;
	let xString = x.toString();

	let xRev = x.toString().split("");
	xRev = xRev.reverse();
	xRev = xRev.join("");

	xString === xRev ? (answer = true) : (answer = false);
	return answer;
};

isPalindrome(323);

//https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
	let answer = 0;
	let answerArr = s.split("");
	//loop through and add up each in arr
	answerArr.forEach((ele, i) => {
		//add check here for alt cases
		if (ele === "I") {
			//if alt situation, pop out next # from arr so doesn't add number twice
			answerArr[i + 1] === "V"
				? ((answer = answer + 4), answerArr.splice(i + 1, 1))
				: answerArr[i + 1] === "X"
				? ((answer = answer + 9), answerArr.splice(i + 1, 1))
				: (answer = answer + 1);
		} else if (ele === "V") {
			answer = answer + 5;
		} else if (ele === "X") {
			answerArr[i + 1] === "L"
				? ((answer = answer + 40), answerArr.splice(i + 1, 1))
				: answerArr[i + 1] === "C"
				? ((answer = answer + 90), answerArr.splice(i + 1, 1))
				: (answer = answer + 10);
		} else if (ele === "L") {
			answer = answer + 50;
		} else if (ele === "C") {
			// console.log(answerArr[i + 1])
			answerArr[i + 1] === "D"
				? ((answer = answer + 400), answerArr.splice(i + 1, 1))
				: answerArr[i + 1] === "M"
				? ((answer = answer + 900), answerArr.splice(i + 1, 1))
				: (answer = answer + 100);
		} else if (ele === "D") {
			answer = answer + 500;
		} else if (ele === "M") {
			answer = answer + 1000;
		}
		console.log(answerArr, answer);
	});
	console.log(answer);
};

// romanToInt("DCXXI");

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
const removeDuplicates = (nums) => {
	for(let i=0; i<nums.length; ) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1);
        }
        else {
            i += 1;
        }
        
    }
    return nums.length
};
				
// removeDuplicates([0,0,0,0,0])


//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
	let reversed;
	let newArray = [];
	reversed = str.split(" ");
	console.log(reversed)
	for (var i = 0; i < reversed.length; i++) {
		newArray.push(reversed[i].split("").reverse().join(""));
		console.log(newArray)
	}
	return newArray.join(" ");
  }
  
// console.log(reverseWords("This is an example!"))

function reverseWords2(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// console.log(reverseWords2("This is an example!"))

