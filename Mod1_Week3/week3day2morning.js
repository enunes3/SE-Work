/*You've been tasked to do this week's grocery shopping.
As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin.
Add this to the existing shoppingList and console.log it. */

var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];

shoppingList.push("Hendricks Gin");
console.log(shoppingList);
///////////////////////////////////////////////////////////////////////////////

/*Use the force, or in this case the reverse method to help Yoda
 make some sense with his motivational talk to the young Jedi interns.*/

 var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];

 console.log(yoda.reverse());
///////////////////////////////////////////////////////////////////////////////

/*People been lining up for hours to get the newest iphone release.
Help manage the unruly crowd of privileged customers by serving them one
at a time and assiging it to a variable named `nowServing`.
Console.log this new variable as well as the waitList.*/

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing =  "";
for (var i=0; i < waitList.length; i++) {
  nowServing = waitList[i];
  console.log("Now Serving " + nowServing);
  }

//going over the problem & using .pop
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing =  "";

waitList = waitList.reverse();
for(var i=0; i <5; i++){
  nowServing = waitList.pop();
  console.log(nowServing);
  console.log(waitList);
}
console.log("Done");


//doing the problem another way using .shift
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing =  "";

for(var i=0; i <5; i++){
  nowServing = waitList.shift();
  console.log(nowServing);
  console.log(waitList); //this just shows what's left in the list
}
console.log("Done");

///////////////////////////////////////////////////////////////////////////////

/*Help Nike sell more overpriced sneakers by changing their slogan from an array
into a string. Convert the shoe array and assign it to a variable named
`shoeString`. Console.log this new variable. */

var shoe = ["just", "do", "it"];
var shoeString = shoe.toString();
console.log(shoeString);

///////////////////////////////////////////////////////////////////////////////
/*Create an array for the first 50 integers*/
let numsArray = [];

for (let i =0; i <=50; i++){
  numsArray.push(i);
}
console.log(numsArray);

///////////////////////////////////////////////////////////////////////////////
/*Create an empty array; use a for loop to iterate the array (starting at index 0)
Assign a value to every index while iterating the array*/
let arr = [];

for(let i=0; i<10;i++){
  arr[i] = i;
}
console.log(arr);
