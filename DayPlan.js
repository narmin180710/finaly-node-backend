const { Router } = require('express')
const { getDay, saveDays, deleteDay, editDay} = require('./DayController')


const router  = Router()

router.get('/', getDay)
router.post('/saveDays', saveDays)
router.post('/deleteDay', deleteDay)
router.post('/editDay', editDay)



module.exports = router