// Exercise 4 - Date Logging
let now = new Date()

let day = now.getDate()
let month = now.getMonth() + 1     // months start from 0, so +1
let year = now.getFullYear()

console.log("Sale on:", day + "/" + month + "/" + year)
console.log("Thank you for your purchase!")