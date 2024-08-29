const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./DayPlan')
const cors = require('cors')


require('dotenv').config()

mongoose.set("strictQuery", false)

const PORT = 5000 || process.env.port

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTING TO MONGO'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`I AM LISTENNING ON PORT ${PORT}`)
})


//EtykUtMvuFMnstPu
//name narminalieva

//mongodb+srv://narminalieva2010:<password>@narminalieva.kqzk3s0.mongodb.net/?retryWrites=true&w=majority&appName=narminalieva