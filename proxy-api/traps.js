let person = {
    age: 27
}

let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'no existance'
    },
    set: function(target, property, value) {
        if(value.length) {
            Reflect.set(target, property, value)
        }
    }
}

var proxy = new Proxy(person, handler)
console.log(proxy.age)
console.log(proxy.name)
proxy.name = 'Aatish'
console.log(proxy.name);

// remove proxy when object is called
let {proxy, revoke} = Proxy.revocable(person, handler)
console.log(proxy.name)
revoke();
console.log(proxy.name)