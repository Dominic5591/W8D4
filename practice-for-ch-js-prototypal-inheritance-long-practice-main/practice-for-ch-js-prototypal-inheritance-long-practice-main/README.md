# Prototypal Inheritance Exercises

It's time to practice _prototypal inheritance_!

## Learning goals

By the end of this practice, you should be able to

* Write and explain `Function.prototype.inherits`
  * Explain what a `Surrogate` class does and why you need it
  * Explain what the `constructor` property does
  * Explain what `__proto__` is
  * Explain what `new` does
  * Explain what `Object.create` does
* Test an inheritance implementation

## inherits

You've learned a couple of ways to implement class inheritance in Javascript.
Let's first look at using a `Surrogate`.

There are a number of steps:

* Define a `Surrogate` class
* Set the prototype of the `Surrogate` (`Surrogate.prototype =
  SuperClass.prototype`)
* Set `Subclass.prototype = new Surrogate()`
* Set `Subclass.prototype.constructor = Subclass`

Write a `Function.prototype.inherits` method that will do this for you. Do not
use `Object.create` right now; you should deeply understand what the `new`
keyword does and how the `__proto__` chain is constructed. This will help you in
the upcoming Asteroids project:

```javascript
function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);
```

How would you test `Function.prototype.inherits`? A few specs to consider:

* You should be able to define methods/attributes on `MovingObject` that ship
  and asteroid instances can use.
* Defining a method on `Asteroid`'s prototype should not mean that a ship can
  call it.
* Adding to `Ship` or `Asteroid`'s prototypes should not change `MovingObject`'s
  prototype.
* The `Ship` and `Asteroid` prototypes should not be instances of
  `MovingObject`.

After you have written `Function.prototype.inherits` using the surrogate trick,
refactor your solution using `Object.create`. Make sure to test that your
updated solution works.

You'll be writing an `inherits` method again for Asteroids.
