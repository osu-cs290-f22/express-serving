function logger(req, res, next) {
    console.log("== Request received")
    console.log("  -- req.url:", req.url)
    console.log("  -- req.method:", req.method)
    next()
}

module.exports = logger
