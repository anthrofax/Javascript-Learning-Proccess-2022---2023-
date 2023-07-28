const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} sedang melaju di kecepatan ${this.speed}, degan daya sebesar ${this.charge}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} sedang melaju di kecepatan ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
