/*Create an Animal class.
The class will have name, age, color, legs, superPower attributes
Create two objects of this class - both with a unique superPower
create three methods for this class - include one method named userSuperPower()
Create two objects for this class */

class Animal {
  constructor (name, age, color, legs, superPower) {
    this.name= name;
    this.age= age;
    this.color =color;
    this.legs = legs;
    this.superPower = superPower;
  }  userSuperPower(){
    console.log(this.superPower);
  } speaks() {
    console.log("Woof Woof!")
  } run (){
    console.log("I like to zoom!");
  }
}
let dog = new Animal('Charlie', 16, 'red-brown' , 4, 'reads your mind');
let puppy = new Animal('Darcy', 1, 'black and white', 4, 'makes you happy');

dog.userSuperPower();
puppy.speak();

/* Create a class name User
This class with have firstName, lastName, department attributes
a method name changeDepartment()
Create three instances of this class
Change department for two of the instances
Create three objects for this class*/

class User {
  constructor (firstName, lastName, department){
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
} changeDepartment (newDepartment){
  this.department = newDepartment;
}

}
const User1 = new User("Sally", "Brown", "IT Dept");
const User2 = new User("James", "King", "HR Dept");
const User3 = new User("Gene", "Belecher", "Accounting Dept");

User2.changeDepartment("IT Dept");
console.log(User2);

User3.changeDepartment("HR Dept");
console.log(User3);
