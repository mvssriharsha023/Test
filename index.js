const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000

// Middleware
app.use(cors())
app.use(express.json());


// Available routes
app.get("/", (req, res) => {
    res.json("Hello");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})