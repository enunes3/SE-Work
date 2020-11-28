/*
var sum;

function theSum(x,y){
  return x+y;
};

sum =theSum(10,10);

console.log(sum);


var sum;
function theSum(x,y){
  return x+y;
  console.log(x+y); //this won't work because this program is saying to return before continuing
};

sum =theSum(10,10);

console.log(sum);


//function========================
function oddEven(x){
  if (x%2 == 0)
    return "even";
  else {
    return "odd";
  }
};

//Main code======================
console.log(oddEven(11))
//when you put 0, it'll call even && -5 calls out odd

*/
//Example of Global & Local scopes===============================
var se =30;      //global scope

function printX(){
  var x=3;
  console.log(x);
  function printY(){
    var y= 5;
    console.log(y);
  }
}

/* x & y are local scope so they aren't accessbile
console.log("se"+se);
console.log("x"+x);
console.log("y"+y);
*/

console.log("se"+se);
console.log("x"+ printX());
