const Router = require('express')
const router = new Router()
const reviewRouter = require("./reviewRouter")

router.use('/review', reviewRouter)

module.exports = router