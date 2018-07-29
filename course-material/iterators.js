// Iterator basics
let array = [1,2,3]
 let ittr = array[Symbol.iterator]();
 console.log(ittr.next()) // returns object done= false, value=1
 console.log(ittr.next()) // returns object done= false, value=2
 console.log(ittr.next()) // returns object done= false, value=3
 console.log(ittr.next()) // returns object done= true, value=undefined

// Creating own iterator
let arrayNew = [1,2,3]

arrayNew[Symbol.iterator] = function() {
    let nextValue = 10;
    return {
        next: function() {
            nextValue++
            return {
                done: nextValue >15 ? true : false
            }
        }
    }
}

 for(let elem of arrayNew) {
     console.log(elem)
 }


 // Custom Iterator for objects

 let person = {
     name: 'Aatish',
     hobbies: ['Cricket', 'VolleyBall', 'Hockey'],
     [Symbol.iterator]: function () {
         let i =0;
         let hobbies = this.hobbies;
         return {
             next: function() {
                 let value = hobbies[i]
                 i++
                 return {
                     done: i > hobbies.length ? true : false,
                     value: value
                 }
             }
         }
     }
 }

 for (let hobby of person) {
     console.log(hobby)
 }