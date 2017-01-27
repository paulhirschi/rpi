const express    = require('express');
const app        = express()
const morgan     = require('morgan')
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const conf       = require('./config')();

const PORT       = conf.port
const DB         = conf.database

mongoose.Promise = global.Promise
mongoose.connection.on('open', function() {
  console.log(`Connected to mongo server. Using db ${DB}`)
})
mongoose.connection.on('error', function(err) {
  console.log(`Could not connect to mongo server! ERR ${err}`)
})
mongoose.connect(DB)

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/node_modules'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/vnd.api+json'}))

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT)
console.log(`App listening on port ${PORT}`)
