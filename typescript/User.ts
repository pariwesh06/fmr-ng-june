class User {
  fname: string;
  age: number;
  constructor(fname: string) {
    this.fname = fname;
  }
  walk() {//public method
    console.log(this.fname + ' is walking');
    this.run();
  }
  private run() {
    console.log(this.fname + ' is running');
  }
}

class Employee extends User {
  constructor(fname: string) {
    super(fname);
  }
}
var u1 = new User('Ram');
u1.walk();
// u1.run();

const e1: Employee = new Employee('SHyam');
e1.walk();
