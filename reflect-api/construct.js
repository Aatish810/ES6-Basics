class Person {
    constructor(name) {
        this.name = name;
    }
}

function TopObj() {
    this.age = 27;
}
// craeting a object and assigning prototype of TopObj to Person
let person = Reflect(Person, ['XYZ'], TopObj)
console.log(person.__proto__ ===TopObj.prototype)