/* Create a variable price and assign it the value 19.56789.
Use .toFixed() to:
Round the price to 2 decimal places.
Round the price to no decimal places.
Print both results using console.log() with messages:
"Price with 2 decimals: 19.57"
"Price with no decimals: 20"
 */

// solution
let price = 19.56789;
let precision = 2;
let finalPrice = price.toFixed(precision)
console.log(finalPrice)
console.log(`Price with ${precision} decimals is: ${finalPrice}`)

precision = 0;
console.log("Price with no decimals is:", price.toFixed(precision));

precision = 3;
console.log(`Price with ${precision} decimals is`, price.toFixed(precision));