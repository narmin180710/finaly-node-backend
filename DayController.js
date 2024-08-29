const DayModel = require('./DayModel')


module.exports.getDay = async (req, res) => {
    const myDay = await DayModel.find()
    res.send(myDay)
}

module.exports.saveDays = async (req, res) => {
    const { title } = req.body
    DayModel.create({ title })
    .then((data) => {console.log('Day added')
    res.send(data)
    })
}

module.exports.deleteDay = async (req, res) => {
    const {_id} = req.body
    DayModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted plan on day'))
}

module.exports.editDay = async (req, res) => {
    const {_id, title} = req.body
    DayModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited plan on day'))
}