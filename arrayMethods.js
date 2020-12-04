//Splice
var arr = ['A', 'B', 'C', 'D'];
var str= "Welcome to Software Engineering Class";
array.splice(start, [deleteCount], [item1], [item2])
console.log(arr.splice(1,2,'X'));
console.log(arr);

//Answer ['B', 'C']
//['A', 'X', 'D']

//Slice
//array.slice(begin, end)
//string.slice(begin, end)  a string is an array of characters
console.log(arr.slice(1,2));
console.log(str.slice(1,2));
console.log(arr);
console.log(str);

//Answer ['B']
// e
// ['A', 'B', 'C', 'D']
//"Welcome to Software Engineering Class"

//Split
//string.split([separator[, limit]])
var arr = ['A 1 2', 'B 1 2', 'C 1 2', 'D 1 2'];
var str= "Welcome to Software Engineering Class";
/*console.log(arr.split(" ",3));
cannot do array with split. BUT you can convert a string into an array.
Essentially this code only separates by space and not by characters*/
console.log(str.split(" ",3));
console.log(str);

var str= "Welcome-to-Software,Engineering,Class";
console.log(str.split("-",9));
console.log(str); // [ 'Welcome', 'to', 'Software,Engineering,Class' ]
console.log(str.split(",",9));
console.log(str); //[ 'Welcome-to-Software', 'Engineering', 'Class' ]
