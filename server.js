var express = require("express")

var logger = require("./logger")

var app = express()
var port = 3001

app.use(logger)

app.use(express.static("public/"))

app.get("/about", function (req, res, next) {
    var content = "<html>"
    content += "<body>"
    content += "<h1>About</h1>"
    content += "</body>"
    content += "</html>"

    res.status(200).send(content)
})

app.get("/", function (req, res, next) {
    res.status(200).sendFile(__dirname + "/public/index.html")
})

app.get("/people", function (req, res, next) {
    res.status(200).sendFile(__dirname + "/public/people.html")
})

var availablePeople = [
    'luke',
    'leia',
    'finn',
    'rey',
    'r2d2'
]
app.get("/people/:person", function (req, res, next) {
    console.log("  -- req.params:", req.params)

    var person = req.params.person
    if (availablePeople.indexOf(person) !== -1) {
        res.status(200).sendFile(__dirname + "/public/people/" + person + ".html")
    } else {
        next()
    }
})

app.get("*", function (req, res, next) {
    console.log("  -- 404!")
    res.status(404).sendFile(__dirname + "/public/404.html")
})

// app.post()
// app.put()
// app.patch()
// app.delete()

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
})
