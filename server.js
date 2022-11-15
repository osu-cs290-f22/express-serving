var express = require("express")

var app = express()
var port = 3001

app.get("/about", function (req, res, next) {
    console.log("== Request received")
    console.log("  -- req.url:", req.url)
    console.log("  -- req.method:", req.method)

    var content = "<html>"
    content += "<body>"
    content += "<h1>About</h1>"
    content += "</body>"
    content += "</html>"

    res.status(200).send(content)
})

app.get("/", function (req, res, next) {
    console.log("== Request received")
    console.log("  -- req.url:", req.url)
    console.log("  -- req.method:", req.method)
    res.status(200).sendFile(__dirname + "/public/index.html")
})

app.get("/people", function (req, res, next) {
    console.log("== Request received")
    console.log("  -- req.url:", req.url)
    console.log("  -- req.method:", req.method)
    res.status(200).sendFile(__dirname + "/public/people.html")
})

app.get("*", function (req, res, next) {
    console.log("== Request received")
    console.log("  -- req.url:", req.url)
    console.log("  -- req.method:", req.method)
    res.status(404).sendFile(__dirname + "/public/people.html")
})

// app.post()
// app.put()
// app.patch()
// app.delete()

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
})
