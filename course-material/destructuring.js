// assingning values directly
let array = [1, 2, 3]
let [a, b, c] = array
console.log(a)
console.log(b)
console.log(c)

// swapping number
let d =10;
let e = 12;
[e, d] = [d, e]
console.log(d)
console.log(e)

// Pull out some values only 
let nArr = [1, 2, 3, 4]
let [f, , ,g] = nArr;
console.log(f, g)

// destructuring Objects
//Passing empty space will not work in ojects because we use names
let Obj = {
  name: 'Aatish',
  age: 24,
  greet: function () {
    console.log('Hello There')
  }
}

let {name, age, greet} = Obj;
console.log(name, age)
console.log(greet)
