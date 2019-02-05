
// module wrapper functions
let url = "httpL//mylogger.io/log"
console.log(__filename)
console.log(__dirname)


const log = (message) => {
    // send http request
    console.log(message)
}

module.exports = log


