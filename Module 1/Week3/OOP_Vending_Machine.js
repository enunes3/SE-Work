/*Week3 Day3 Morning lab*/
class Snack {
  constructor (name, price){
    this.name= name;
    this.price= price;
  }
}

class VendingMachine {
  constructor() {
  this.snacks = [] //needs to be an array
}
vend (snackIndex) {
  return this.snacks[snackIndex];
}
}

let vendMachine = new VendingMachine()
let snack1= new Snack('Snickers Bar',1);
let snack2= new Snack('Doritos', .75);
let snack3= new Snack('Pop Tart', .75);

let snacks = [snack1,snack2,snack3]

vendMachine.snacks.push(...snacks)

console.log(vendMachine.vend(1))
