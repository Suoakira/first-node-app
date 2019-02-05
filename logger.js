let url = "httpL//mylogger.io/log"

const log = (message) => {
    // send http request
    console.log(message)
}

module.exports.log = log
module.exports.url = url