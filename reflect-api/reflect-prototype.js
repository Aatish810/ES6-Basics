class Person {
    constructor() {
         this.name = 'HJHHJ'
    }
}

let person = new Person();

Person.prototype.age= 27;

console.log(person.prototype)
 console.log(Reflect.getPrototypeOf(person) === Person.prototype)
// chaning prototype using Reflect
let proto = {
    age: 30
}

Reflect.setPrototypeOf(person, proto)
console.log(Reflect.getPrototypeOf(person))