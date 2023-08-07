const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} sedang melaju di kecepatan ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} sedang melaju di kecepatan ${this.speed}`);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.accelerate();
car1.brake();
// Hasil Akhir : 135 km/h

car2.accelerate();
car2.accelerate();
car2.brake();
// Hasil Akhir : 110 km/h
