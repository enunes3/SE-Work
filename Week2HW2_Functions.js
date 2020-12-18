//Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascript.

function maxOfTwoNumbers(firstNum, secondNum) {
  if (firstNum > secondNum){
    return firstNum;
  } else if (firstNum < secondNum){
    return secondNum;
  }
}
//setting 2 numbers
console.log(maxOfTwoNumbers(982, 782));


//Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) {
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}
console.log(maxOfThree(783,1248,421));

//Write a function isCharacterAVowel that takes a character
//(i.e. a string of length 1) and returns true if it is a vowel, false otherwise
var vowels= (['a', 'e', 'i', 'o', 'u']);
function (isCharacterAVowel) {
  if (vowels) {
    return true;
  } else {
    return false;
  }
}
console.log(a)

//Define a function sumArray that sums all the numbers in an array of numbers.
//For example, sumArray([1,2,3,4]) should return 10

function sum(numbers)  {
  var total= 0;
  for (var i=0; i < numbers.length; i++) {
    total += numbers [i];
  }
  return total;
}
console.log(sum ([1,2,3,4]));

//Define a function multiplyArray that multiplies (respectively) all the numbers in an array of numbers.
//For example, multiplyArray([1,2,3,4]) should return 24.

function multiply(numbers) {
  var total=1;
  for (var i=0; i <numbers.length; i++) {
    total = (total * numbers[i]);
  }
  return total;
}
console.log(multiply([1,2,3,4]));

//Write a function that returns the number of arguments passed to the function when called.


// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
 function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }

   function findLongestWord(arr) {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
  }
   console.log(findLongestWord(["bloomburg", "hello"]));
   //console.log(findLongestWord(['boop', 'software ', 'helloooooooooo']));
