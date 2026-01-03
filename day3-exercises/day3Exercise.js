// Exercise 1 - Tonnage Check
let procurementTonnage = 1200

let isEnough = procurementTonnage >= 1000

console.log('Tonnage in kg:', procurementTonnage)
console.log('Is it 1000kg or more?', isEnough)

// Exercise 2 - Why === is better
let costStr = "500" // this is text
let costNum = 500 // this is number

console.log(costStr == costNum) // true  → loose check
console.log(costStr === costNum) // false → strict check (safer)

console.log("=== is safer because string and number are different")

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

// Exercise 4 - Date Logging
let now = new Date()

let day = now.getDate()
let month = now.getMonth() + 1     // months start from 0, so +1
let year = now.getFullYear()

console.log("Sale on:", day + "/" + month + "/" + year)
console.log("Thank you for your purchase!")
