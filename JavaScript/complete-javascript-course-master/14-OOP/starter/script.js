'use strict';
/*
const Person = function(firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this ❌ 
    // this.calcAge = function() {
    //    console.log(2037 - this.birthYear);
    // }
};

// 1. New empty object is created
// 2. func is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically returns {}

const jonas =  new Person('Jonas', 1991);
const matilda = new Person('Matlida', 1997);
const jack = new Person('Jack', 1977);

console.log(matilda, jack, jonas); // instances of 'Person'

console.log(jonas instanceof Person);

// prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function() {
        console.log(2021 - this.birthYear);
};

jack.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'homo sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 4, 6, 2, 6]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__); // Back to the object prototype

Array.prototype.unique = function() {
   return [...new Set(this)];
}

console.log(arr.unique());


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function(make, speed) {
    this.company = make;
    this.speed = speed;
}

const bmw = new Car('BMW', 120)
console.log(bmw);

const merc = new Car('Mercedes', 95);
console.log(merc);

Car.prototype.accelerate = function() {
     this.speed += 10;
    console.log(`${this.company} going at ${this.speed}km/h`);
}


Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.company} going at ${this.speed}km/h`);
}

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
merc.brake();
merc.brake();


class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  }
//   LinkedList.prototype.insertAtEnd = function(data) {
//       const newNode = new Node(data);
//       if (!this.head) {
//         this.head = newNode
//         return this.head;
//       }
//       let tail = this.head;
//       if(tail.next !== null){
//             tail = tail.next;
//        }
//        tail.next = newNode;
//        return this.head;
  
//     }
    
    LinkedList.prototype.insertAtEnd = function(data) {
        let newNode = new Node(data) 
        if (this.head === null) {
          this.head = newNode;
          return this.head;
        }
        let last = this.head;
        while(last.next !== null) {
          last = last.next;
        }
        last.next = newNode;
        return this.head;
      }
  
const list = new LinkedList();

list.insertAtEnd(2);
list.insertAtEnd(5);
// list.insertAtEnd(9);
// list.insertAtEnd(9);
// list.insertAtEnd(8);
// console.log(list);

// list.deleteElement(5, 5);
// console.log(list);


// class expression
// const PersonCl = class {}

// class declaration 
class PersonCl {
    constructor(firstName, birthYear) {
        this.fullName = firstName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to the .prototype property
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    get age() {
        return 2021 - this.birthYear;
    }

    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }
    // static method
    static hey() {
        console.log('Hey there! 👋'); 
        console.log(this);
    }
}

const jess = new PersonCl('Jessica Davis', 1998);
const walt = new PersonCl('Walter White', 1960);
console.log(jess);
jess.calcAge();
console.log(jess.age);

console.log(jess.__proto__ === PersonCl.prototype);

PersonCl.hey();

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;
console.log(account.movements);



console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sara = Object.create(PersonProto);
sara.init('Sarah', 1993);
sara.calcAge();


class Cars {
    constructor(make, speed) {
        this.company = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.company} going at ${this.speed} km/h`)
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.company} going at ${this.speed} km/h`);
    }

    get speedUS() {
        return `${this.company} going at ${this.speed/1.6} mi/h`
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

const ford = new Cars('Ford', 120);
console.log(ford.speedUS)
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.speedUS = 50;
console.log(ford); 
// console.log(`${ford.company} going at ${ford.speed} km/h`);
//  console.log(`${ford.company} going at ${ford.speedUS} mi/h`);


const Person = function(firstName, birthYear) {
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

};


Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function() { 
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const mike = new Student('Mike', 2021, 'Computer Science');
console.log(Person.prototype.isPrototypeOf(mike))
mike.introduce();
// console.log(mike.__proto__ === Student.prototype);
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(Person.prototype.isPrototypeOf(Student))


const Cars = function(make, speed) {
    this.company = make;
    this.speed = speed;
}

 Cars.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.company} is going at ${this.speed} km/h`)
 }


const EV = function(make, speed, currentCharge) {
    Cars.call(this, make, speed);
    this.charge = currentCharge;
    console.log(`${this.company} is going at ${this.speed} km/h at ${this.charge}%`);
}

EV.prototype = Object.create(Cars.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.company} is going at ${this.speed} km/h at ${this.charge}%`);
}

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.company} is going at ${this.speed} km/h at ${this.charge}%`);
}

const tesla = new EV ('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
console.log(tesla);
console.log(Cars.prototype.isPrototypeOf(tesla));


class PersonCl {
    constructor(firstName, birthYear) {
        this.fullName = firstName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to the .prototype property
    calcAge() {
        console.log(2021 - this.birthYear);
    }

    get age() {
        return 2021 - this.birthYear;
    }

    set fullName(name) {
        // console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName;
    }
    // static method
    static hey() {
        console.log('Hey there! 👋'); 
        console.log(this);
    }
}

class StudentCl extends PersonCl {
     constructor(fullName, birthYear, course) {
         // Always needs to happen first!
         super(fullName, birthYear)
         this.course = course;
     }

     introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
     }

     calcAge() {
         console.log(`I'm ${2021 - this.birthYear}, but as a student I feel more like ${2021 - this.birthYear + 10}`);
     }
}

const martha = new StudentCl('Martha Jones', 2001, 'Computer Science');
martha.introduce();
martha.calcAge();


//////////////////////////////////////////////////////////
// Inheritance between "Classes": Object.create

const PersonProto = {
    calcAge() {
        console.log(2021 -  this.birthYear); 
    },

        init(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
        }
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear)
    this.course = course;
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2003, 'Computer Science');


// 1. Public Fields
// 2. Private Fields
// 3. Public methods
// 4. Private methods

class Account {
    // 1. Public fields (instances)
    locale = navigator.language;
    
    // 2. Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected Property  
        this.#pin = pin;
        //this._movements = [];
        //this.locale = navigator.language;
    }
    
    // 3. Public Methods
    // Public interface 
    getMovements() {
        return this.#movements;
    }


    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdrawal(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
       // if(this.#approveLoan(val)) 
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`);
            return this;
        }
    }
    // 4. Private Methods
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);


acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(2000);
console.log(acc1.getMovements());
console.log(acc1);
// console.log(acc1.#approveLoan(11));

// Chaining

acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).withdrawal(4000);
console.log(acc1.getMovements());
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀



class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super (make, speed)
        this.#charge = charge;
        console.log(`${this.make} is going at ${this.speed} km/h at ${this.#charge}% battery`);
    }

    _chargeTo(charging) {
        this.#charge = charging;
        return this;
    }

    accelerate() {
        this.speed += 10;
        this.#charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h at ${this.#charge}% battery`);
        return this;
      }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h at ${this.#charge}% battery`);
        return this;
      }  
}

const riv = new EVCl('Rivian', 120, 23);
console.log(riv);

riv.accelerate().accelerate().brake()._chargeTo(90).accelerate().accelerate();
*/

class Node {
    constructor(data, next = null)  {
      this.data= data;
      this.next = next;
    }

}
  
  class LinkedList {
    constructor() {
      this.head = null;
    }

    insertAtStart(data) {
        const newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
        return this.head;
    }

    insertAtEnd(data){
        // A newNode object is created with property data and next=null
            
            let newNode = new Node(data);
        // When head = null i.e. the list is empty, then head itself will point to the newNode.
            if(!this.head){
                this.head = newNode;
                return this.head;
            }
        // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
           let tail = this.head;
           while(tail.next !== null){
                tail = tail.next;
           }
           tail.next = newNode;
           return this.head;
        }

    deleteAtStart() {
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }

    deleteAtEnd() {
        if(!this.head) {
            return null;
        }

        if (!this.head.next) {
            this.head = null;
        }

        let previous = this.head;
        let tail = this.head.next;
        if (tail !== null) {
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;
        return this.head;
    }
  }

const ll = new LinkedList();
// ll.insertAtEnd(2);
// ll.insertAtEnd(3);
// ll.insertAtEnd(9);
// ll.insertAtEnd(1);
// ll.deleteAtStart();
// ll.deleteAtStart();
// console.log(ll);

ll.insertAtStart(2);
ll.insertAtStart(4);
ll.insertAtStart(8);

console.log(ll);

// ll.deleteAtEnd();
// ll.deleteAtEnd();

// ll.deleteLastNode();
// ll.deleteLastNode();
// console.log(ll);
