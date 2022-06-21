/** @format */

var counter = (function () {
  var count = 0;
  return function (n) {
    count = n === undefined ? count : n;

    return count++;
  };
})();

var counting = (function () {
  count = 0;
  return {
    value(n) {
      if (n !== undefined) count = n;
      return count;
    },
    increment() {
      return count++;
    },
    decrement() {
      return count--;
    },
  };
})();

var myPrint = (a, b, res) => `${a}^${b}=${res}`;
var myPow = (a, b, cb) => {
  var pow = (x, n) => {
    if (n !== 1) return (x *= pow(x, n - 1));

    return x;
  };
  return cb(a, b, pow(a, b));
};
// console.log(myPow(3, 4, myPrint));

var yearMow = new Date().getFullYear();
var car = {
  engine: 5500,
  model: 'GL 500',
  name: 'Mersedes',
  year: 2008,
  info() {
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
  },
  get used() {
    return this.year < yearMow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && yearMow) this.year = yearMow;
  },
};
// console.log(car.info());
// car.used = 'new';
// console.log(car.info());

var list = [5, 10, 20, 50, 100, 150, 1000];
var myMax = (arg) => Math.max.apply(null, arg);

// console.log(myMax(list));

function myMul(a, b) {
  return a * b;
}
var myDouble = myMul.bind(null, 2);
var myTriple = myMul.bind(null, 3);

// console.log(myMul(3, 5));
// console.log('🚀 ~ myDouble', myDouble(3));
// console.log('🚀 ~ myDouble', myTriple(3));

var notUniq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var myUniq = (arr) => {
  var mySet = new Set();
  arr.forEach((el) => {
    mySet.add(el);
  });
  return mySet;
};

console.log(myUniq(notUniq));
