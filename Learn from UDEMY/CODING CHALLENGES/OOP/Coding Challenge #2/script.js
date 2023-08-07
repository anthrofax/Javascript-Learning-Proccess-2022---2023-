class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} sedang melaju di kecepatan ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} sedang melaju di kecepatan ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    //Function setter speedUS ditrigger/dipanggil jika dan hanya jika kita melakukan perubahan pada property speedUS. Dan function setter tersebut merubah nilai dari property speed dari constructor function nya
    this.speed = value * 1.6;
  }
}
const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);

ford.speedUS = 50; //Bisa dilihat disini, karena setter speedUS dirubah menjadi 50, maka value dari property speed pada constructor function akan berubah menjadi 50 * 1.6 = 80
console.log(ford);

// ford.accelerate();
// ford.accelerate();
// ford.brake();
