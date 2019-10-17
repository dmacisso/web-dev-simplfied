const name = 'David';

class Person {
  constructor(name) {
    this.name = name;
  }
  printNameArrow() {
    setTimeout(() => {
      console.log(`Arrow: ${this.name}`);
      // 'this' is defined inside the person object. It does not get redefined when using an arrow function.

    }, 100);
  }

  printNameFunction() {
    setTimeout(function() {
      console.log(`Function: ${this.name}`);
      // 'this' is defined base on where the function is called in this case the global scope, this is redefined in the calling scope.
    }, 100);
  }
}

const person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();
console.log(`Global Scope ${this.name}`);
