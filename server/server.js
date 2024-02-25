// Impots
const app = require('express')()
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./database/db.js')()
const memberFormRouter = require('./routes/memberForm.js')
const bodyParser = require('body-parser')

// Local Variables
const port = 3000

dotenv.config()
// Middleware
app.use(cors({
  origin: "*",
  credentials: true,
  optionsSuccesfulStatus: 200,
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/member-form', memberFormRouter)

// Port
app.listen(port || 8080, () => console.log(`Server listening on ${port}`))
