const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World, Test1')
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})

// can use req.params.id to get requests
app.get('/api/courses/:id/:year', (req, res) => {
    res.send(req.params)
})

// PORT enviroment variable
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))
