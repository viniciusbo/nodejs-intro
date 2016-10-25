var counter = require('./counter');

console.log(counter.count);
counter.increment(10);
console.log(counter.count);
counter.decrement(5);
console.log(counter.count);

require('./othermodule');