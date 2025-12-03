// Exercise 3 - Type checking & conversion
let price = "450000"
let quantity = 2

console.log("Price as string:", price, "---> type:", typeof price)
console.log("Quantity:", quantity, "---> type:", typeof quantity)

let priceNumber = Number(price)
let total = priceNumber * quantity

console.log("Total cost:", total)