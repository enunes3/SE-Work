//Practicing "let loop"
/* var i = -1;
console.log(i)

for (let i =0; i<10; i++){
  console.log(i);
}

//Practicing "while loop"
let i= 0;
while (i<10){
  console.log(i);
  i++;
}


//For loops with #; but breaking them so its 1+ in each line
for (let count =0; count <7; count++){
  for(let i=0; i<=count; i++){
    process.stdout.write("#")
  }
  console.log();
}


//Clive found a simpler solution-- better because it only has one loop
var hash = ''; 
for(let i = 0; i < 7; i++){ 
  hash += '#' 
  console.log(hash); 
}


//Write a loop that counts down from 10 to 1

var i= 0;
for (i=10; i>0; i--){
  console.log(i);
}
