/*
Define a new class called Circle with appropriate attributes and
instantiate a few Circle objects.
Write a function called circle_area that returns the area of the object.*/
class Circle {
  constructor (radius) {
    this.radius = radius;
    this.area = function ()
    {
      return Math.PI *radius * radius;
    };
  }

}

let circle2= new Circle(2);

console.log(circle2.area());

/*Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.*/
class Rectangle {
  constructor (width, height) {
    this.width= width;
    this.height= height;
    this.area = function ()
    {
      return width * height;
    } ;
    this.total_sides = function ()
    {
      return 4;
    }
  }
}
let rectangle1= new Rectangle(5,8);

console.log(rectangle1.area());

//Write a function total_sides that returns the number of sides of the object.
console.log(rectangle1.total_sides());

/*Define a new class called Square with appropriate attributes and instantiate a few Square objects.
Write a function called square_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object. */
class Square {
  constructor (side) {
    this.side= side;
    this.area = function ()
    {
      return side^2;
    } ;
    this.total_sides = function ()
    {
      return 4;
    }
  }
}
let square1= new Square(4);

console.log(square1.area()); // look over this

//Write a function total_sides that returns the number of sides of the object.
console.log(square1.total_sides());
