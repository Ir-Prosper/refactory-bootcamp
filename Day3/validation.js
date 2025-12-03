// Exercise 3 - Complex Validation
let dealerName = 'Prosper'
let costUgx = 150000

let nameIsValid = dealerName.length >= 2
let costIsValid = costUgx >= 10000

let bothValid = nameIsValid && costIsValid

console.log('Dealer name:', dealerName)
console.log('Cost in UGX:', costUgx)
console.log('Name okay? (at least 2 letters)', nameIsValid)
console.log('Cost okay? (5 digits or more)', costIsValid)
console.log('Can we accept this dealer?', bothValid)
