//Using a while loop, print out all the prime numbers between 0-20

for (var num = 0; num <= 20; num++) {
    var notPrime = false;
    for (var i = 2; i <= num; i++) {
        if (num%i===0 && i!==num) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(num);
    }
}

let num=0;
while (num <= 20){
  if (num%2);
  console.log(num);
    num++;
}
