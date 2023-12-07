Function.prototype.inherits = function(Parent) {
  function thisProto() {}
  thisProto.prototype = Parent.prototype;
  this.prototype = new thisProto();

  this.prototype.constructor = this;
  
}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);