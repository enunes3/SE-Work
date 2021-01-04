//Part1: Write a for loop for the given output: 1,3,4,7,9 and 2,4,6,8,10
 for (var i=1; i<10; i+=2) {
  console.log (i);
}
for (var i=2; i<=11; i+=2) {
  console.log (i);
}

//Going though with Salah during class
for (var i=1; i <=10; i++) {
  if (i%2==0) {
  console.log("This is even " + i);
} else {
    console.log("This is odd " + i);
  }
}


//Part2: Write a for loop that iterates between 0 and 10 and prints all even numbers.
for (var i =0; i<10;i++) {
  if (i%2===0) {
    console.log(i);
  }
}

// Another code
for (let i = 1; i <= 20; i++) {
  if (i == 1 || i % 3 == 0)
    console.log(i + " is odd;" + "\n");
  else if (i == 2 || i % 2 == 0)
    console.log(i + " is even;" + "\n");
  else
    console.log(i + " is prime;" + "\n")
}


//Part3:Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers.
//Treat 2 as an even number and 1 & 3 as odd
