// Set stores only unique value
let set = new Set([1,1,1])

for(let elm of set) {
    console.log(elm)
    // we get 1 only one time
}
set.add(2)
for(let elm of set) {
    console.log(elm)
    // we get 1 and 2
}
// removeone and clear method
set.delete(1)
set.clear(1)
// to check if value exist and return true or false
set.has(1)

// looping in sets
// 1. Printing values as it is with index
for (let entry of set.entries()) {
    console.log(entry)
}

// 2. getting Keys 
for(let key of set.keys()) {
    console.log(key)
}

// 3. getting values
for(let value of set.values()) {
    console.log(value)
}

//Weak Sets
let ob1 = {a: 1}
let obj2 = {b: 2}

let weakSet = new WeakSet([obj1, obj2])

weakSet.has(obj1)