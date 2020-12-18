/* Write an if/else statement for the following requirements:
If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F*/

var num = 9;
if (num >= 90) {
    console.log("Grade-A");
} else if (num >= 80 && num <= 89){
    console.log("Grade-B");
} else if (num >=70 && num <= 79){
    console.log("Grade-C");
} else if (num >=55 && num <=69) {
    console.log("Grade-D");
} else if (num < 55) {
    console.log("Grade=F");
}

/* Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59
"Good Afternoon" if time is between 12 - 16 | otherwise "Hey there" */
var time= 1300;
if (time >= 0500 && time <= 1159) {
  console.log('Good Morning!');
} else if (time >=1200 && time <=1600){
  console.log('Good Afternoon!');
} else{
  console.log('Hey There!');
}

//when adding anytime during the morning, I keep getting both messages when print
