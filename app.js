// importing modules
const path = require("path")
const os = require("os")

// converts path to object, easier to work with than using strings
let pathObject = path.parse(__filename)
let totalMemmory = os.totalmem()
let freeMemory = os.freemem()


console.log(pathObject)

console.log(totalMemmory)
console.log(freeMemory)