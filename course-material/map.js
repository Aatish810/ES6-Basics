// Create map for object and set keys, get obj and remove or clear them
let cardAce = {
    name: 'Ace of spades'
}
let cardKing = {
    name: 'King of spades'
}

let card =  new Map();
card.set('ca', cardAce)
card.set('ck', cardKing)
console.log(card.size)
console.log(card.get('as'))
let removeOne = card.delete('as')
console.log(card.size)
let clearAll = card.clear()
console.log(card.size)

//Looping for values in map 
// 1. Printing values as it is
for (let entry of card.entries()) {
    console.log(entry)
}

// 2. getting Keys 
for(let key of card.keys()) {
    console.log(key)
}

// 3. getting values
for(let value of card.values()) {
    console.log(value)
}

// Weak Map
let cardAce = {
    name: 'Ace of spades'
}
let cardKing = {
    name: 'King of spades'
}

let weakCard =  new WeakMap();
let key1 = {a:1}
let key2 = {a:2}
weakCard.set(key1, cardAce)
weakCard.set(key2, cardKing)
console.log(weakCard.get(key1))