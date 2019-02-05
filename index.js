const express = require('express')
const app = express()
app.use(express.json())

const courses = [
    {id: 1, name: "course1"}
]
app.get('/', (req, res) => {
    res.send('Hello World, Test1')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

// can use req.params.id to get requests
app.get('/api/courses/:id', (req, res) => {
    // res.send(req.params)
    let course = courses.find(course => course.id === parseInt(req.params.id))
    console.log(course)
    if (!course) {
        res.status(404).send("Course with given id was not found")
    } else {
        res.send(course)
    }
})

app.post('/api/courses', (req, resp) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    resp.send(course)
    console.log(courses)
})

// PORT enviroment variable
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))
