// Day 2 – All String Exercises

console.log("=== DAY 2 STRING EXERCISES ===\n")

// 1. String Concatenation
let dealerName1 = "IRAKOZE"
let location1 = "Hoima"
let message1 = "Dealer: " + dealerName1 + " | Location: " + location1
console.log("1. Concatenation")
console.log(message1)
console.log("")

// 2. Template Literal
let dealerName2 = "Prosper IRAKOZE"
let location2 = "Kampala"
let message2 = `Dealer: ${dealerName2} | Location: ${location2}`
console.log("2. Template Literal")
console.log(message2)
console.log("")

// 3. Type Conversion
let price = "450000"
let quantity = 2
console.log("3. Type Conversion")
console.log("Price as string:", price, "---> type:", typeof price)
console.log("Quantity:", quantity, "---> type:", typeof quantity)
let priceNumber = Number(price)
let total = priceNumber * quantity
console.log("Total cost =", total)
console.log("")

// 4. String Methods
let text = "hello world Kyangwali"
console.log("4. String Methods")
console.log("Original  :", text)
console.log("Uppercase :", text.toUpperCase())
console.log("Lowercase :", text.toLowerCase())
console.log("Replaced  :", text.replace("Kyangwali", "Kasonga"))
console.log("")

// 5. KGI Real Record
let rawName = " Prosper Irakoze "
let product = "maize flour"
let code = "kg2025-087"
let tons = "1250"

let cleanName = rawName.trim().toUpperCase()
let record = `${cleanName} - ${product.toUpperCase()} - Code: ${code} - ${tons}kg`

console.log("5. Final KGI Record")
console.log(record)
