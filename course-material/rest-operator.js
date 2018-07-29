console.log("hello")
// ...var converts coming parameters list to array (REST Operator)
function sumAll(...addElm){
  let result;
  for (i=0; i< addElm.length; i++) {
    result += addElm[i]
  }
  return result;
}

console.log(sumAll(10, 20, "30"))

// SPREAD OPERATOR - converts array to list
let array = [1, 2, 3, 4, 5]

console.log(...array);
//it will convert array to list and pass one parameter at a time
console.log(Math.max(...array))

// FOR OF Loop
let newArray = [1, 2, 3, 4,5]
 for (let arr of newArray) {
     console.log(arr);
 }