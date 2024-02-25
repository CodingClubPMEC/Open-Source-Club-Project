const router = require('express').Router()

router.get('/', (req, res) => {
  res.send("Member form router")
})

module.exports = router
