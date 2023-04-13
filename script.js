// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// call method is used since when we wnat the inheritance in constructor function we have to call the parent constructor function. But constructor function when called using new keyword then only creates an empty new object and this keyword is set to that object, but here we have to call it witghout new keyword, so by using call method we manually set the this keyword to the current instance of the function where it is called i.e. Employee's instance (emp1 object).
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}
// We have to manually connect the prototypes of parent and child clas  using this object.create method.
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}
Employee.prototype.jobGreet = function () {
  // console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

// let emp1 = new Employee('Swapnil', 30, 'SDE');
// console.log(emp1);
// console.log(emp1.age);
// console.log(`person's greet`, emp1.greet());
// console.log(`employees's greet`, emp1.jobGreet());
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
