// Exercise 5 - Real KGI dealer record (combines everything)
let dealerName = "  Prosper Irakoze  "
let product = "maize flour"
let procurementCode = "kg2025-087"
let tonnage = "1250"

let cleanName = dealerName.trim().toUpperCase()
let niceRecord = `${cleanName} - ${product.toUpperCase()} - Code: ${procurementCode} - ${tonnage}kg`

console.log("Final clean record:")
console.log(niceRecord)