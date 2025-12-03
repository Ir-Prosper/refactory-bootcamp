// Exercise 2 - Why === is better
let costStr = "500" // this is text
let costNum = 500 // this is number

console.log(costStr == costNum) // true  → loose check
console.log(costStr === costNum) // false → strict check (safer)

console.log("=== is safer because string and number are different")
