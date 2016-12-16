const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const port = 8081

var http = require('http').Server(app)

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTION")
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist')))

const server = http.listen(port)
console.log(`Server is running on port: ${port}`)