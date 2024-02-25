const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const db = async () => {
  await mongoose.connect("mongodb+srv://subhamc88:subham2004@userdata.unfcofh.mongodb.net/?retryWrites=true&w=majority&appName=userData")
    .then(mongoose.connection.once('open', () => console.log("Database is connected")))
  mongoose.connection.on('error', (error) => console.log(`Error Found:\n${error}`))
}
module.exports = db
