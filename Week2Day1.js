//Create a loop that outputs multiples of 3 starting at 6 ending at 60


for (var i=6; i <=60; i+=3) {
  console.log(i);
}


//Another way to do this- Mamadou
for (i = 6; i <= 60; i++) { 
  if (i%3 == 0) 
  console.log(i);
 } 


//Final way to do this- Diana
let count=6;
for (var i = 0; i < 60; i++) {
  if (count<=60) {
    console.log(count);
    count+=3;
  }
  else {
    break;
  }
}
