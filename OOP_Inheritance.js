/* Week 3 Day 4 Morning Lab
Create a class called Fish
Define a method Swim( )
Create a class Nemo that inherits from Fish
Define an attribute color
Create a Nemo object. Can it swim?
*/

class Fish {
  constructor() {}
  swim() {
    console.log("I can Swim");
  }
}
//use the keyword extends to inherit from parent - Fish. Call super() in child's constructor so parent's methods and properties are accessed.
class Nemo extends Fish {
  constructor(color) {
    super();
    this.color = color;
  }
}
const Nemo1 = new Nemo('orange');
Nemo1.swim();
console.log(Nemo1.swim);
