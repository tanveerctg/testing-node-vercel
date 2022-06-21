const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/hello-world", (req, res) => {
	res.send("Hello World!")
})
app.get("/hello", (req, res) => {
	res.send("Hello")
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
module.exports = app
