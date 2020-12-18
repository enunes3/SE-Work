var toFind =4;
var arr = [1,2,3,4,5,6,7,8,9,10];

var firstIndex = 0; //first Index [i]
var lastIndex = arr.length-1; //last Index [i]  (last index of an array = array.length - 1)
var midIndex = 0;
var found = false;

while (firstIndex <= lastIndex) {     //checking to see if your 1st [i] is less than or equal to last [i]
  midIndex = parseInt((firstIndex + lastIndex)/2); //to go to the middle, add 1st[i]+last[i] /2
  if(arr[midIndex] == toFind){  //
    found= true;
    console.log("Found");
    break;
  } else if(arr[midIndex] < toFind){
    firstIndex = midIndex+1;
  } else {
    lastIndex = midIndex-1;
  }
  }

if (found == false){
console.log("Not Found");
}
