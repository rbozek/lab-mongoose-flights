import mongoose from 'mongoose'

// shortcut to mongoose.connection object
const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)
	
db.on('connected', function() {
  console.log(`RB flights is connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})