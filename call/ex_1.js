function sayNameForAll(label) {
  console.log(label + ':' + this.name);
}

var person1 = {
  name: 'Nick'
}

var person2 = {
  name: 'Sarah'
}

var name = 'Harold';

console.log(this)

sayNameForAll.call(this, 'global');
sayNameForAll.call(person1, 'person1');
sayNameForAll.call(person2, 'person2');