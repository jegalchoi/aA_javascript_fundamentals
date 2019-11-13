function Cat(name, owner) {
  this.name = name,
  this.owner = owner
};

Cat.prototype.cuteStatement = function () {
  console.log(`${this.owner} loves ${this.name}`);
};

let jane = new Cat('jane', 'jay');
let haine = new Cat('haine', 'jay');
jane.cuteStatement();

Cat.prototype.cuteStatement = function () {
  console.log(`Everyone loves ${this.name}!`);
};
jane.cuteStatement();

Cat.prototype.meow = function () {
  console.log('meow!')
};
jane.meow();

jane.meow = function () {
  console.log('MEOW!')
};

jane.meow();
haine.meow();


