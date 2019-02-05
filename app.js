// importing modules
const path = require("path")
const os = require("os")
const fs = require("fs")
// upper class indicates its a class, which as a bunch of related methods
const EventEmitter = require('events')

// converts path to object, easier to work with than using strings
let pathObject = path.parse(__filename)
let totalMemmory = os.totalmem()
let freeMemory = os.freemem()

// actual object instance of the class
const emitter = new EventEmitter()
//Register a listner
emitter.on('messagelogged', (arg) => console.log("listner called", arg))
// emit means to make a noise singnalling an event as happened
// raise an event
// we can also pass event args
emitter.emit('messagelogged', {id: 1, url: "http://"})




// const files = fs.readdirSync('./')

// asynchronus results, always prefer asynchronus methods
const files = fs.readdir('./', (err, files) => {
    if (err) {
        console.log(err)
    } else {
        console.log(files)
    }
})


console.log(pathObject)

// node can give us a lot more information
console.log(totalMemmory)
console.log(freeMemory)
console.log(files)
