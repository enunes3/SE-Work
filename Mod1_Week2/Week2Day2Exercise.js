//Write a while loop to count down to 1
//for loop
/*
for (i=10; i >=1; i--){
  console.log(i);
}

//while loop
var i=10;
while (i>=1){
  console.log(i);
  i--;
}

//do..while
var i=10;
do {
  console.log(i);
  i--;
} while (i>=1);


//Using a while loop for integers between 0-20.
//all numbers divisble by 2 should be multiplied by 3 before they are output.
//All other integers should not be ouput
let i= 1;
while (i <=20){
  if (i%2==0)
  console.log(i*3);
  i++;
}
//Seetha's way
var k = 0;
while(k < 20){
  if(k == 0){
    k++;
    continue;
  }
  if( k % 2 == 0)
    console.log(k + " is divisible by 2 so when multiplied by 3 it is: " + k * 3);
  k++;
}
*/

//Nando went to the vending machine to buy a cookie. The cookie is $4. He paid with a $10bill.
//The vending machine paid him back in quarters, write a loop that says how many quarters he got in return.
var amountOfCookie= 4;
var dollarBill=10;

//Calculate how many quarters
// 4 Quarters to every dollar
var dollar= 1/.25;
  while 
