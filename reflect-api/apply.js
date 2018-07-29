class Person {
    constructor(name) {
        this.name = name;
        this.age = 27;
    }
    greet (prefix) {
        console.log(`${prefix} this, from ${this.name}`)
    }
}
let person = Reflect(Person, ['XYZ'])
// first paramenter below is function, second defines which 
//this(scope of this) to use, third is function parameter
Reflect.apply(person.greet, this, ['Hello'])
// chaing this to some other object
Reflect.apply(person.greet, {name: 'ABC'}, ['Hello'])