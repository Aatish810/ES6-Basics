// generator basics

function *gen (end) {
    for(let i=0; i< end; i++) {
     yield i
    }
}
let ittr = gen(2)
console.log(ittr.next())
console.log(ittr.next())
console.log(ittr.next())


// throwing an error, returning custom return
function *gen (end) {
    try {
        for(let i=0; i< end; i++) {
         yield i
        }
    } catch(e) {
        console.log(e)
    }
}
let ittr = gen(4)
console.log(ittr.next())
// throwing a error, after that it will continue
console.log(ittr.throw('Error occured'))
// sending a custom value so that i dnt get i at this point
console.log(ittr.return('Hello all'))
console.log(ittr.next())
console.log(ittr.next())