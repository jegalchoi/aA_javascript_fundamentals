const titleize = (arr, printCallback) => {
  arr = arr.map(ele => `Mx. ${ele} Jingleheimer Schmidt`);

  printCallback(arr);
}

const printCallback = (arr) => {
  arr.forEach(i => console.log(i));
}

//titleize(["Mary", "Brian", "Leo"], printCallback);

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRR!!`);
} 

Elephant.prototype.grow = function() {
  this.height += 12;
} 

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  let bag_of_tricks = this.tricks[Math.floor(Math.random() * this.tricks.length)]
  console.log(`${this.name} is ${bag_of_tricks}`);
}

Elephant.paradeHelper = function (ele) {
  console.log(`${ele.name} is trotting by!`)
};

const joe = new Elephant('joe', 120, ['painting a pictures', 'eating peanuts']);

/*
console.log(joe);
console.log(joe.name);
joe.trumpet();
joe.grow();
console.log(joe.height);
console.log(joe.tricks);
console.log(joe.addTrick('POOPING A LOT'));
console.log(joe.tricks);
joe.play()
*/


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

//herd.forEach(elephant => (elephant.paradeHelper(elephant)));

const dinerBreakfast = function() {
  let order = [`cheesy scrambled eggs`];
  order.push(food);

  return () => {
    console.log(`I'd like `)
  }
}
