var uri = 'mongodb://localhost:27017/test'

var mongoose = require('mongoose')
mongoose.connect(uri)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(callback) {
  console.log('db connected')
})

var skillSchema = mongoose.Schema({
  skill: String,
  level: String,
  note: String
})

exports.Skill = mongoose.model('Skill', skillSchema)

