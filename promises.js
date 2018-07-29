let promise1 = new Promise(function (resolve, reject){
    setTimeout(function() {
        resolve('Done');
    }, 1500)
})

promise1.then(function(val) {
    console.log(val)
}, function(e) {
    console.log(e)
})

let promise2 = new Promise(function (resolve, reject){
    setTimeout(function() {
        reject('Failed');
    }, 3000)
})
promise2.then(function(val) {
    console.log(val)
}).catch(function(e) {
    console.log(e)
})