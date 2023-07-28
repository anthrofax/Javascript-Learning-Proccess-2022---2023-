'use strict';

// OOP pada dasarnya bukan sebuah fitur yang disediakan oleh Javascript itu sendiri, melainkan ini merupakan pola/style yang diciptakan oleh developer lain untuk menulis suatu kode dan sekarang hampir semua orang menggunakannya

/*
Pilar utama penggunaan OOP :
- Abstraction
- Encapsulation
- Inheritence
- Polymorpism
*/

//Ini merupakan constructor function yang dapat diibaratkan sebagai class dalam classical OOP
const Person = function (firstName, birthYear) {
  //Instance property
  this.firstName = firstName;
  this.birthYear = birthYear;

  /* Jangan pernah membuat method di suatu constructor function seperti ini, karena jika kita membuat 1000 objek menggunakan constructor function ini, sama saja kita membuat 1000 copy function pada masing-masing objek yang dibuat, dan itu sangat buruk untuk performa code kita.
  this.calcAge = function() {
    console.log(2022 - this.birthYear  );
  }
  */
};

// Sedangkan ini bisa diibaratkan instance dari class Person di atas
const edo = new Person('Afridho', 2004);
const rizki = new Person('Rizki', 2004);
const sopian = new Person('Sopian', 2004);
const rei = 'Rei';

console.log(edo, rizki, sopian);

// Cara untuk mencek suatu objek merupakan instance dari constructor function tertentu
console.log(edo instanceof Person);
console.log(rei instanceof Person);

/*
Saat kita memanggil suatu function dengan keyword "new", akan terjadi beberapa langkah, antara lain :
1. Objek kosong baru dibuat {}
2. this yang ada di function tersebut akan diatur menunjuk ke objek baru yang telah dibuat barusan (yang dimana jika function tersebut dipanggil tanpa "new" this akan merujuk ke window object (undefined jika javascript diatuir ke 'use strict')). this = {}
3. Objek yang baru dibuat akan terhubung ke sebuah Prototype. {} -> Prototype
4. function yang dipanggil akan mereturn objek {} tersebut
*/

// Prototype
/*
 Setiap function pada Javascript otomatis memiliki property yang bernama "Prototype" termasuk constructor function. Oleh karena itu, setiap objek yang dibuat menggunakan constructor function tertentu akan mendapatkan akses ke semua method & property yang kita buat di constructor prototype property

 Jadi, jika kita menggunakan contoh di atas. objek seperti edo, rizki, sopian akan mendapatkan akses ke semua method ataupun property yang dibuat pada prototype yang terhubung ke constructor function "Person"
*/

// Contoh
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

edo.calcAge();

/*
Mengapa objek edo, rizki, sopian bisa mengakses semua method ataupun property yang ada di Person.property?
-> Karena objek" tersebut terhubung dengan constructor function Person. Dan objek" tersebut selalu bisa memiliki akses ke method & property dari Prototype nya, dan Prototype dari edo, rizki, sopian adalah Person.prototype

Person.prototype sebenarnya bukan prototype dari person, melainkan prototype yang akan digunakan oleh instance/objek yang dibuat menggunakan constructor function Person tersebut
*/

// Pembuktiannya
console.log(edo.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(edo));
console.log(Person.prototype.isPrototypeOf(rizki));
console.log(Person.prototype.isPrototypeOf(Person));

// Selain Method, Prototype juga bisa menyimpan property, contoh :
Person.prototype.wargaNegara = 'Indonesia';
console.log(edo.wargaNegara, sopian.wargaNegara);

// Meskipun begitu, property dari Prototype tidak dapat dikatakan kepemilikan langsung dari instance nya, berikut cara mencek apakah suatu property merupakan kepemilikan langsung dari suatu objek sebagai pembuktian
console.log(edo.hasOwnProperty('birthYear'));
console.log(edo.hasOwnProperty('wargaNegara'));

// Class Rules :
// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode (even we're not activate it in the whole code yet)
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const ari = new PersonCl('Ari', 2003);

console.log(PersonCl.prototype === ari.__proto__);

// Getter & Setter
const account = {
  owner: 'Afridho',
  movements: [200, 150, 100, 95],

  get latest() {
    return this.movements.slice(-1);
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.latest);
console.log(account.movements);

// Tidak hanya regular object, class juga dapat dimasukkan property getter & setter, contoh :
class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return this.calcAge();
  }
}

const gudang = new PersonCl2('Gudang', 2002);
console.log(gudang.age);

/*
Getter berguna untuk mengakses property yang value nya butuh dilakukan operasi tertentu terlebih dahulu. Sedangkan setter adalah property yang dapat menampung value seiring kita memberi/merubah valuenya
*/

// Getter & Setter bisa sangat berguna untuk "Data Validation", contoh :
class PersonCl3 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return this.calcAge();
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Name yang diinputkan bukan nama lengkap!');
  }

  get fullName() {
    return this._fullName;
  }
}

const mahes = new PersonCl3('Maheswara Abhista', 2004);
// const mahes = new PersonCl3('Maheswara', 2004); *Akan muncul alert, karena nama yang diinputkan bukan nama lengkap
console.log(mahes);

// Syntax di atas memvalidasi data nama pada objek, dengan menggunakan setter, nama yang dimasukkan ke instance hanya nama lengkap saja (yang memiliki spasi ' ' ). Lalu dengan getter akan membuat kita mampu memanggil property fullName dengan normal (mahes.fullName) meskipun nama yang telah divalidasi menggunakan setter disimpan di variable _fullname

// Jadi perlu diingat bahwa, jika kita membuat setter dengan nama property yang sama dengan nama property yang sudah ada di constructor function, maka kita bisa merubah nama property nya dengan nama yang berbeda. Biasanya, developer melakukannya cukup dengan menambahkan underscore '_' tepat sebelum nama property yang sama tersebut

// STATIC METHOD, adalah method dari constructor function yang tidak di turunkan (inherit) ke instance-instance nya, jadi static method hanya dapat diakses melalui constructor function nya saja.

// 1. Contoh Static Method pada Constructor Function
const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ihsan = new Person2('Ihsan', 2001);

Person2.hey = function () {
  console.log('Hello there!');
};

Person2.hey();
// ihsan.hey(); *Akan terjadi error, karena hey merupakan static method dari Person2

// 2. Contoh Static Method pada ES6 Class
class PersonCl4 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return this.calcAge();
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Name yang diinputkan bukan nama lengkap!');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey, there!');
  }
}

const ihsan2 = new PersonCl4('Ihsan 2', 2001);
PersonCl4.hey();
// ihsan.hey(); *Akan terjadi error, karena hey merupakan static method dari PersonCl4

// Object.create()
// Pada cara ini, konsep nya cukup berbeda dengan cara sebelumnya. Di cara ini tidak ada constructor function, operator new, maupun prototype yang dibuat secara otomatis. Melainkan kita membuat menghubungkan objek prototype nya secara manual dan penentuan property pada instance nya dilakukan melalui prototype (dengan dibuatkannya method init di prototype, tidak melalui constructor function)
const personProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const adit = Object.create(personProto);
adit.init('Adit', 2004);
adit.calcAge();

// Inheritance between classes
// Kita bisa menjadikan prototype dari suatu objek agar terhubung dengan prototype dari objek lainnya sebagai parent dengan menggunakan Object.create()
const Person3 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person3.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototype between Student Class with Person Class IN CONSTRUCTOR FUNCTION WAY
Student.prototype = Object.create(Person3.prototype);

Student.prototype.introduce = function () {
  console.log(`Hello, my name is ${this.firstName} and I study ${this.course}`);
};

const eki = new Student('Eki', 2004, 'Informatika');
eki.calcAge(); //Sekarang instance eki sudah bisa memanggil method yang ada di Person3.prototype yaitu calcAge

console.log(eki.__proto__);
console.log(eki.__proto__.__proto__); //Kita bisa cek dengan console log bahwa prototype dari Student terhubung dengan prototype dari Person3

console.log(eki instanceof Student);
console.log(eki instanceof Person);
console.log(eki instanceof Object); //Dengan dilakukan nya linking prototype, menyebabkan object eki tidak hanya berstatus instance dari Student saja, melainkan instance dari constructor function  di atasnya juga seperti  Person & Object

// Dan juga dampak lainnya dari linking prototype adalah constructor function dari Student.prototype tidak lagi Student constructor function itu sendiri lagi, melainkan Person constructor function, bisa dilihat
console.dir(Student.prototype.constructor);
// Untuk mengubah nya seperti semula, kita bisa cukup melakukan ini  :
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // Dengan begitu "Student.prototype.constructor" akan menunjuk kembali ke constructor function Student lagi

//Linking prototype between Student Class with Person Class IN ES6 CLASS WAY
class PersonCl5 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return this.calcAge();
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Name yang diinputkan bukan nama lengkap!');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey, there!');
  }
}

class StudentCl extends PersonCl5 {
  constructor(fullName, birthYear, course) {
    //  Function super di bawah harus ditulis paling awal di constructor, karena function super tersebut berperan dalam membuat this keyword menjadi merujuk ke object baru
    super(fullName, birthYear); //Jika kita tidak butuh property tambahan (extended property, seperti course dalam Student ini. Maka kita tidak perlu membuat constructor function nya, jadi saat kita membuat instance baru dari StudentCl class tersebut, Javascript tetap dapat membuat objek dengan property yang telah kita tentukan walaupun constructor function nya tidak kita tuliskan di child class nya yakni StudentCl)
    this.course = course;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.fullName} and I study ${this.course}`
    );
  }

  calcAge() {
    console.log(
      `I'm ${
        new Date().getFullYear() - this.birthYear
      }, but as a student i feel more like ${
        new Date().getFullYear() - this.birthYear + 10
      } :D`
    ); //Melakukan overwrite pada calcAge method (calcAge sudah ada di parent class dari StudentCl yakni PersonCl5), namun karena konsep Polymorphism OOP, kita bisa menimpa fungsionalitas dari method parent class menjadi method yang kita tulis di child class.
  }
}

const husna = new StudentCl('Ikhwan Husna', 2004, 'Gizi');
console.log(husna);
husna.introduce();
husna.greet(); //Instance husna sudah bisa memanggil greet() method yang ada di constructor function PersonCl5, yang menandakan StundentCl.prototype sudah terhubung ke PersonCl5.prototype sebagai prototype chain
husna.calcAge();

// Linking prototype between Student Class with Person Class IN OBJECT.CREATE WAY
const personProto2 = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(personProto2);
StudentProto.init = function (firstName, birthYear, course) {
  personProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName},  and I study ${this.course}`);
};

const ikhwan = Object.create(StudentProto);
ikhwan.init('Ikhwan', 2003, 'Religion Science');
console.log(ikhwan);
ikhwan.introduce();

// Property Encapsulation (Protection)
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._movements = []; // penamaan property disamping dengan menggunakan underscore adalah trik yang digunakan developer lain agar property tersebut tidak bisa  diakses secara mudah dari luar class. Cara ini bukan benar" upaya encapsulation, melainkan hanya sebuah "convention" agar property tersebut seolah olah ter-enkapsulasi. Sekalipun kita mengaksesnya dengan nama yang sesuai (mengikutsertakan underscore nya) walaupun tetap bisa diakses ataupun dirubah, kita menjadi lebih sadar bahwa hal tersebut tidak seharusnya dilakukan
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  //   Public Interface, ini upaya yang bisa kita lakukan untuk menerapkan konsep abstraction pada kode (menyembunyikan syntax yang seharusnya pengguna tidak pedulikan). Misalnya pada withdraw dibawah, dengan membuat methodnya sendiri, kita menyembunyikan fakta bahwa untuk melakukan withdraw kita harus menginputkan nilai negatif, sedangkan dengan method withdraw tersebut kita hanya perlu memasukkan nilai withdraw nya saja ke argument method nya
  deposit(value) {
    this._movements.push(value);
  }

  withdraw(value) {
    this.deposit(-value);
  }

  getMovements() {
    console.log(this._movements);
  }

  _approveLoan(val) {
    //Protected or Encapsulated method, ini adalah contoh method yang seharusnya hanya boleh digunakan di dalam class. Dengan keiinginan seperti itu, kita bisa mewujudkan nya dengan menggunakan cara tadi, yaitu menamakan nama property nya dengan underscore
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved!');
    }
  }
}

const acc1 = new Account('Afridho', 'RP', 756787);
acc1.deposit(250);
acc1.withdraw(100);

acc1.requestLoan(200);
acc1.getMovements();

// Encapsulation using New Javascript Features, Private fields (properties) & methods
/* 
1. Public Fields
2. Private Fields
3. Public methods
4. Public methods
The rest is static version of those 4 things
*/

class Account2 {
  // 1. Public Fields (Instances)
  locale = navigator.language;

  // 2. Private fields (Instances)
  movements = [];
  #pin; //Way to declare private fields if the value depends on constructor function argument below

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; //Protected property

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // 4. Public methods
  deposit(value) {
    this.movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  getMovements() {
    console.log(this.movements);
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved!');
      return this;
    }
  }

  //4. Private method
  #approveLoan(val) {
    return true;
  }
}

const acc2 = new Account2('Ikhsan', 'RUPIAH', 12345);
console.log(acc2);
acc2.requestLoan(1000);
// acc2.#approveLoan(1000); tidak bisa digunakan karena menggunakan #appriveLoan dijadikan private method

// CHAINING
acc2.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); //Agar method dari class ini bisa dilakukan chaining, kita perlu mereturnkan object yang terkait dlu di setiap method yang ingin di lakukan chaining. Karena jika tidak, method tersebut akan menghasilkan undefined dan tentunya undefined tersebut tidak bisa memanggil method dari object terkait
acc2.getMovements();
