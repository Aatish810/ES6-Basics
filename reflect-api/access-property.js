class Person {
    constructor(name, age) {
        this._name =name;
        this.age = age;
    }
    get name() {
         return this._name
    }
    set name (value) {
        this._name = value
    }
}
 let mum = {
     _name: 'mum'
 }

 let person = new Person()
 console.log(Reflect.get(person, 'name'))
 Reflect.set(person, 'name', 'Anna', mum)
 console.log(Reflect.get(person, 'name', mun))
 // finding some value
 console.log(Reflect.has(person, 'name'))
 // finding all value
 console.log(Reflect.ownKeys(person))


 // adding configurable properties to object
 Reflect.defineProperty(person, 'hobbies', {
     writable: true,
     value: ['Sports', 'Dancing'],
     configurable: true
 })
 console.log(person.hobbies)

//delete method
Reflect.deleteProperty(person, 'age')
console.log(person.age)

// stopping user from adding properties
console.log(Reflect.isExtensible(person))
Reflect.preventExtensions(person)
console.log(Reflect.isExtensible(person))