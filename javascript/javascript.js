//https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen

function vowelsAndConsonants(s) {
    //make everything lowercase 
    const string = s.toLowerCase()
    const stringArr = string.split("")
    //log each vowel
    let consArr = []
    stringArr.forEach((ele) => {
     if (ele === "a" || ele === "e" || ele === "i" || ele === "o" || ele === "u") {
       console.log(ele)
     } else {
       consArr.push(ele)
     }
    })
   for (cons of consArr) {
     console.log(cons)
   }
    
}

// vowelsAndConsonants("I choose you pikachu")

//https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem

function getArea(length, width) {
  let area;
  area = length * width
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width)
  return perimeter;
}

