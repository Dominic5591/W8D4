// ES5 sum
// function sum() {
//   return Array.from(arguments).reduce((a, e) => a + e);
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

//ES6 WAY
// function sum(...args) {
//   return args.reduce((a, e) => a + e);
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

// Function.prototype.myBind = function (ctx, ...args) {
// 	return (...args2) => this.apply(ctx, args.concat(args2));
// };


// Function.prototype.myBind = function () {
//   let args = Array.from(arguments)
//   let that = this

// 	return function() {
//     let allArgs = args.concat(Array.from(arguments))
//     return that.apply(allArgs[0], allArgs.slice(1));
//   } 
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

// function sumThree(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!

// function curriedSum(nLength) {
//   let nums = [];

//   function sum(n) {
//     nums.push(n);
//     nLength--
//     if (nLength > 0) {
//       return sum;
//     } else {
//       return nums.reduce((a, e) => a + e);
//     }
//   }

//   return sum;
// }


Function.prototype.curry = function(numArgs) {
  let args = [];
  let curried = this

  function _curry(n) {
    args.push(n);
    numArgs--
    if (numArgs > 0) {
      return _curry;
    } else {
      return curried(...args)
    }
  }

  return _curry;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
